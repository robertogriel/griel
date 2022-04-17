
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../../Functions/getToken";
import Aside from "../Aside/Aside";
import AsideControl from "../Aside/AsideControl";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Header/nav";


const Customers = (props) => {

    const [ customers, setCustomers ] = useState([]);

    const token = getToken()

    const getCustomers = async()=>{
        await fetch(`${process.env.REACT_APP_API_URL}/sistema/clientes/listar`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then((response) => response.json())
        .then((result)=>{
            setCustomers(result)
        })
    }
    
    useEffect(() => {
        getCustomers();
    }, [])

    const removeCustomer = async (e)=>{

        const id = e.target.getAttribute('data-id');

        await fetch(`${process.env.REACT_APP_API_URL}/sistema/clientes/apagar/${id}`, {
            headers: { "Authorization": `Bearer ${token}` },
            method: 'DELETE'
        })

        getCustomers();
    }



    return (
        
        
        <>
            <Header title="Início - " /><Nav /><Aside />

            <div className="content-wrapper">

                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>{props.title}</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active">{props.title}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="content">


                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">


                                            <div className="card-tools">
                                                <div className="input-group input-group-sm" style={{ width: '150px' }}>
                                                    <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />

                                                    <div className="input-group-append">
                                                        <button type="submit" className="btn btn-default">
                                                            <i className="fas fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body table-responsive p-0">
                                            <table className="table table-hover text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Nome</th>
                                                        <th>E-Mail</th>
                                                        <th>Telefone</th>
                                                        <th>Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {customers &&
                                                        customers.map((customer, index) => (
                                                            <tr key={index}>
                                                                <td>{customer.id}</td>
                                                                <td>{customer.name}</td>
                                                                <td>{customer.email}</td>
                                                                <td>{customer.phone}</td>
                                                                <td><Link to={`/sistema/editar-cliente-${customer.id}`} className="btn btn-primary btn-xs">Editar</Link> <button data-id={customer.id} onClick={removeCustomer} className="btn btn-danger btn-xs">Apagar</button></td>
                                                            </tr>
                                                        ))
                                                    }

                                                </tbody>
                                            </table>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="card-footer">
                            <Link className="btn btn-lg btn-primary" to="/sistema/novo-cliente">Novo Cliente</Link>
                        </div>

                    </div>


                </section>

            </div>

            <Footer />
            <AsideControl />
        </>
    );
}

export default Customers;