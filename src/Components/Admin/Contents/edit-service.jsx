

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getToken } from "../../../Functions/getToken";
import Aside from "../Aside/Aside";
import AsideControl from "../Aside/AsideControl";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Header/nav";


const ServiceForm = (props) => {

	const [serviceData, setServiceData] = useState();

	let token = getToken();

	const navigate = useNavigate();

	const { id } = useParams();


	useEffect(() => {

		if (id && !isNaN(id)) {

			const token = getToken()

			fetch(`${process.env.REACT_APP_API_URL}/sistema/servicos/listar/${id}`, {
				headers: { "Authorization": `Bearer ${token}` }
			})
				.then((response) => response.json())
				.then((result) => {
					setServiceData(result)
				})
		}

	}, []);


	switch (props.act) {
		case 'new':

			const submitForm = async (data) => {

				data.preventDefault();

				const form = data.target;

				await fetch(`${process.env.REACT_APP_API_URL}/sistema/servicos/criar`, {
					headers: { "Authorization": `Bearer ${token}` },
					method: 'POST',
					body: new FormData(form),
				})


				return navigate('/admin/servicos');

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

											<div className="col-sm-3">
												<label htmlFor="name">Nome do Serviço:</label>
												<input className="form-control" type="text" name="name" id="new-name" required />
											</div>
											<div className="col-sm-3">
												<label htmlFor="price">Valor</label>
												<input className="form-control" type="text" name="price" id="new-price" required />
											</div>
											<div className="col-sm-3">
												<label htmlFor="renew">Duração em Dias</label>
												<input className="form-control" type="number" name="renew" id="new-renew" required />
											</div>
											<div className="col-sm-3">
												<label htmlFor="has_day">Data de Renovação</label>
												<input className="form-control" type="number" name="has_day" id="new-has_day" required />
											</div>

										</div>

									</div>

									<div className="card-footer">
										<button id="save" className="btn btn-primary" type="submit">Salvar</button>
										&nbsp;
										<Link to="/admin/servicos" className="btn btn-default">Cancelar</Link>
									</div>
								</div>
							</form>
						</section>

					</div >

					<Footer />
					<AsideControl />
				</>
			)

		case 'edit':

			const submitUpdateForm = async (data) => {

				data.preventDefault();

				const form = data.target;

				await fetch(`${process.env.REACT_APP_API_URL}/sistema/servicos/atualizar/${id}`, {
					headers: { "Authorization": `Bearer ${token}` },
					method: 'POST',
					body: new FormData(form),
				})


				return navigate('/admin/servicos');

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

						{serviceData &&
							<section className="content">
								<form method="POST" onSubmit={submitUpdateForm}>

									<div className="card">
										<div className="card-body">

											<div className="row">
												<div className="col-sm-3">
													<label htmlFor="name">Nome do Serviço:</label>
													<input className="form-control" type="text" name="name" defaultValue={serviceData.name} id="new-name" required />
												</div>
												<div className="col-sm-3">
													<label htmlFor="price">Valor</label>
													<input className="form-control" type="text" name="price" defaultValue={serviceData.price} id="new-price" required />
												</div>
												<div className="col-sm-3">
													<label htmlFor="renew">Duração em Dias</label>
													<input className="form-control" type="number" name="renew" defaultValue={serviceData.renew} id="new-renew" required />
												</div>
												<div className="col-sm-3">
													<label htmlFor="has_day">Data de Renovação</label>
													<input className="form-control" type="number" name="has_day" defaultValue={serviceData.has_day} id="new-has_day" required />
												</div>
											</div>

										</div>

										<div className="card-footer">
											<button id="save" className="btn btn-primary" type="submit">Salvar</button>
											&nbsp;
											<Link to="/admin/servicos" className="btn btn-default">Cancelar</Link>
										</div>
									</div>
								</form>
							</section>
						}

					</div >

					<Footer />
					<AsideControl />
				</>
			);


		default:
	}

}

export default ServiceForm;