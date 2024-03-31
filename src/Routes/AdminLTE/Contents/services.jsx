
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../../Functions/getToken";
import Aside from "../Aside/Aside";
import AsideControl from "../Aside/AsideControl";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Header/nav";


const Services = (props) => {

    const [ services, setServices ] = useState([]);

    const token = getToken()

    const getServices = async()=>{
        await fetch(`${process.env.REACT_APP_API_URL}/sistema/servicos/listar`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then((response) => response.json())
        .then((result)=>{
            setServices(result)
        })
    }
    
    useEffect(() => {
        getServices();
    }, [])

    const removeService = async (e)=>{

        const id = e.target.getAttribute('data-id');

        await fetch(`${process.env.REACT_APP_API_URL}/sistema/clientes/apagar/${id}`, {
            headers: { "Authorization": `Bearer ${token}` },
            method: 'DELETE'
        })

        getServices();
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
                                                        <th>Valor</th>
                                                        <th>Renovação</th>
                                                        <th>Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {services &&
                                                        services.map((service, index) => (
                                                            <tr key={index}>
                                                                <td>{service.id}</td>
                                                                <td>{service.name}</td>
                                                                <td>{parseFloat(service.price).toLocaleString('pt-br', {
                                                                    style: 'currency',
                                                                    currency: 'BRL'
                                                                })}</td>
                                                                <td>{service.renew} dias</td>
                                                                <td><Link to={`/sistema/editar-servico-${service.id}`} className="btn btn-primary btn-xs">Editar</Link> <button data-id={service.id} onClick={removeService} className="btn btn-danger btn-xs">Apagar</button></td>
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
                            <Link className="btn btn-lg btn-primary" to="/sistema/novo-servico">Novo Serviço</Link>
                        </div>

                    </div>


                </section>

            </div>

            <Footer />
            <AsideControl />
        </>
    );
}

export default Services;