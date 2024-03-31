import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../../Functions/getToken";
import { parse } from 'date-fns';
import Aside from "../Aside/Aside";
import AsideControl from "../Aside/AsideControl";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Header/nav";

const Contracts = (props)=>{

    const token = getToken()

    const [ contracts, setContracts ] = useState([]);

    const getContracts = async()=>{
        await fetch(`${process.env.REACT_APP_API_URL}/sistema/contratos/todos`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then((response) => response.json())
        .then((result)=>{
            setContracts(result);
        });
    }

    useEffect(()=>{
        getContracts();
    },[]);

    const removeContract = async (e)=>{

        const id = e.target.getAttribute('data-id');
        const customer_id = e.target.getAttribute('data-customer_id');

        await fetch(`${process.env.REACT_APP_API_URL}/sistema/contratos/apagar/${customer_id}-${id}`, {
            headers: { "Authorization": `Bearer ${token}` },
            method: 'DELETE'
        })

        getContracts();
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
                                                    <th>Cliente</th>
                                                    <th>Serviço</th>
                                                    <th>Valor</th>
                                                    <th>Início</th>
                                                    <th>Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {contracts &&
                                                    contracts.map((contract, index) => (
                                                        <tr key={index}>
                                                            <td>{contract.id}</td>
                                                            <td>{contract.customer_name}</td>
                                                            <td>{contract.service_name}</td>
                                                            <td>{contract.service_price}</td>
                                                            <td>{contract.created}</td>
                                                            <td><button data-id={contract.id} data-customer_id={contract.customer_id} onClick={removeContract} className="btn btn-danger btn-xs">Cancelar</button></td>
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
                        <Link className="btn btn-lg btn-primary" to="/sistema/novo-contrato">Novo Contrato</Link>
                    </div>

                </div>


            </section>

        </div>

        <Footer />
        <AsideControl />
    </>
    );
}

export default Contracts;