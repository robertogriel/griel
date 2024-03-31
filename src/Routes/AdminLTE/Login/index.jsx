import { useEffect, useState } from 'react';
import Header from '../Header';
import Alerts from '../../../Components/Alerts';

import '../scss/index.scss';
import Wrapper from '../wrapper';

const Login = (props) => {


	useEffect(() => {

		document.querySelector("body").className = 'login-page';

		document.querySelector("div#root").style = {
			width: '100%',
			justifyContent: 'center',
			display: 'flex',
			alignItems: 'center',
		}



	}, []);

	const [ authentication, setAuthentication ] = useState({});
	const [ remember, setRemember ] = useState(false);


	const login = (e)=>{

		e.preventDefault();

		fetch(`${props.api}/sistema/login`, {
			method: "POST",
			body: new FormData(document.querySelector("form#login-form"))
		})
		.then((response) => response.json())
		.then(function(result) {

			console.log(result)

			if (result && result.status === 403) {
				setAuthentication({res: false, msg: result.message});
			} else {
				
				localStorage.removeItem('access');
				sessionStorage.removeItem('access');
				if (remember) {
					localStorage.setItem('access',result.token);
				} else {
					sessionStorage.setItem('access',result.token);
				}
				setAuthentication(true);
			}

		})

	}

	const rememberMe = ()=>{
		let willRemember = !remember;

		setRemember(willRemember);
	}

	if (authentication === true) {
		return (<Wrapper />)
	} else {

		return (
			<>
			<Header title="Acesse sua conta - " />
			
				<div id="login">
				{(authentication.res === false) ? <Alerts type="error" msg="Seu e-mail ou senha estão incorretos." /> : ''
				
			}	
					<div className="login-box">
						<div className="login-logo">
							<b>Griel Developer</b>
						</div>
	
						<div className="card">
							<div className="card-body login-card-body">
								<p className="login-box-msg">Use seus dados para acessar sua conta</p>
	
								<form id="login-form" onSubmit={login}>
									<div className="input-group mb-3">
										<input type="email" name="email" className="form-control" placeholder="Seu e-mail" required  />
										<div className="input-group-append">
											<div className="input-group-text">
												<span className="fas fa-envelope"></span>
											</div>
										</div>
									</div>
									<div className="input-group mb-3">
										<input type="password" className="form-control" name="password" placeholder="Sua senha" required />
										<div className="input-group-append">
											<div className="input-group-text">
												<span className="fas fa-lock"></span>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-8">
											<div className="icheck-primary">
												<input type="checkbox" id="remember" onChange={rememberMe} />
												<label htmlFor="remember">
													&nbsp;Lembrar meu login
												</label>
											</div>
										</div>
	
										<div className="col-4">
											<button className="btn btn-primary btn-block">Acessar</button>
										</div>
	
									</div>
								</form>
	
								<p className="mb-1">
									<a href="forgot-password.html">I forgot my password</a>
								</p>
								<p className="mb-0">
									<a href="register.html" className="text-center">Register a new membership</a>
								</p>
							</div>
	
						</div>
					</div>
				</div>
	
			</>
		);

	}




}

export default Login;