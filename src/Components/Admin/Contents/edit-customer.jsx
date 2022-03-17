

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getToken } from "../../../Functions/getToken";
import Aside from "../Aside/Aside";
import AsideControl from "../Aside/AsideControl";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Header/nav";


const CustomerForm = (props) => {

	const [customerData, setCustomerData] = useState();

	let token = getToken();

	const navigate = useNavigate();

	const { id } = useParams();


	useEffect(() => {

		if (id && !isNaN(id)) {

			const token = getToken()

			fetch(`${process.env.REACT_APP_API_URL}/sistema/clientes/listar/${id}`, {
				headers: { "Authorization": `Bearer ${token}` }
			})
				.then((response) => response.json())
				.then((result) => {
					setCustomerData(result)
				})
		}

	}, []);


	switch (props.act) {
		case 'new':

			const submitForm = async (data) => {

				data.preventDefault();

				const form = data.target;

				const formData = new FormData(form);

				await fetch(`${process.env.REACT_APP_API_URL}/sistema/clientes/criar`, {
					headers: { "Authorization": `Bearer ${token}` },
					method: 'POST',
					body: new FormData(form),
				})


				return navigate('/admin/clientes');

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
											<div className="col-sm-12">
												<div className="form-group">
													<label htmlFor="name">Nome:</label>
													<input className="form-control" type="text" name="name" id="name" required />
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-4">
												<label htmlFor="email">E-Mail</label>
												<input className="form-control" type="email" name="email" id="email" required />
											</div>
											<div className="col-sm-4">
												<label htmlFor="phone">Telefone</label>
												<input className="form-control" type="phone" name="phone" id="text" required />
											</div>
											<div className="col-sm-4">
												<label htmlFor="document">Documento</label>
												<input className="form-control" type="document" name="document" id="text" required />
											</div>
										</div>

									</div>

									<div className="card-footer">
										<button id="save" className="btn btn-primary" type="submit">Salvar</button>
										&nbsp;
										<Link to="/admin/clientes" className="btn btn-default">Cancelar</Link>
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

				const formData = new FormData(form);

				await fetch(`${process.env.REACT_APP_API_URL}/sistema/clientes/atualizar/${id}`, {
					headers: { "Authorization": `Bearer ${token}` },
					method: 'POST',
					body: new FormData(form),
				})


				return navigate('/admin/clientes');

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

						{customerData &&
						<section className="content">
							<form method="POST" onSubmit={submitUpdateForm}>

								<div className="card">
									<div className="card-body">

										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<label htmlFor="name">Nome:</label>
													<input className="form-control" type="text" name="name" id="name" defaultValue={customerData.name} required />
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-4">
												<label htmlFor="email">E-Mail</label>
												<input className="form-control" type="email" name="email" id="email" defaultValue={customerData.email}  required />
											</div>
											<div className="col-sm-4">
												<label htmlFor="phone">Telefone</label>
												<input className="form-control" type="phone" name="phone" id="text" defaultValue={customerData.phone}  required />
											</div>
											<div className="col-sm-4">
												<label htmlFor="document">Documento</label>
												<input className="form-control" type="document" name="document" id="text" defaultValue={customerData.phone}  required />
											</div>
										</div>

									</div>

									<div className="card-footer">
										<button id="save" className="btn btn-primary" type="submit">Salvar</button>
										&nbsp;
										<Link to="/admin/clientes" className="btn btn-default">Cancelar</Link>
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

export default CustomerForm;