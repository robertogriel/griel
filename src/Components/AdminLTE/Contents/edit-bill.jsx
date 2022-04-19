

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getToken } from "../../../Functions/getToken";
import Aside from "../Aside/Aside";
import AsideControl from "../Aside/AsideControl";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Header/nav";


const BillForm = (props) => {

	const [serviceList, setServiceList] = useState([]);
	
    const [customerList, setCustomersList] = useState([]);

	let token = getToken();

	const navigate = useNavigate();

	const { id } = useParams();

	useEffect(()=>{

		fetch(`${process.env.REACT_APP_API_URL}/sistema/servicos/listar`, {
			headers: { "Authorization": `Bearer ${token}` }
		})
		.then((response) => response.json())
		.then((result)=>{
			setServiceList(result);
		})
	},[token]);

    useEffect(()=>{

		fetch(`${process.env.REACT_APP_API_URL}/sistema/clientes/listar`, {
			headers: { "Authorization": `Bearer ${token}` }
		})
		.then((response) => response.json())
		.then((result)=>{
			setCustomersList(result);
		})
	},[token]);



	switch (props.act) {
		case 'new':

			const submitForm = async (data) => {

				data.preventDefault();

				const form = data.target;

				await fetch(`${process.env.REACT_APP_API_URL}/sistema/clientes/faturas/criar`, {
					headers: { "Authorization": `Bearer ${token}` },
					method: 'POST',
					body: new FormData(form),
				})
					.then((response) => response.text())
					.then((result) => {
						if (result === 400) {
							alert("deu erro")
						} else {
							return navigate('/sistema/faturas');
						}
					})
			


				//

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
							<form method="POST" onSubmit={submitForm}>

								<div className="card">
									<div className="card-body">

										<div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="customer_email">E-Mail do Cliente</label>
                                                    <select className="form-control" name="id_customer" id="id_customer">

														{customerList.map((customer) => {
															return (
																<option key={customer.id} value={customer.id}>{customer.name}</option>
															)
														})}

													</select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="id_service">Tipo do Serviço</label>
													
													<select className="form-control" name="id_service" id="id_service">

														{serviceList.map((service) => {
															return (
																<option key={service.id} value={service.id}>{service.name}</option>
															)
														})}

													</select>

                                                </div>
                                            </div>
                                        </div>

									</div>

									<div className="card-footer">
										<button id="save" className="btn btn-primary" type="submit">Salvar</button>
										&nbsp;
										<Link to="/sistema/faturas" className="btn btn-default">Cancelar</Link>
									</div>
								</div>
							</form>
						</section>

					</div >

					<Footer />
					<AsideControl />
				</>
			)

		default:
	}

}

export default BillForm;