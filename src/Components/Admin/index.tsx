import React, { lazy, useEffect, useState } from 'react';
import Loading from '../Loading';
import AsideControl from './Aside/AsideControl';
import Login from './Login';
import Wrapper from './wrapper';


const Header = lazy(()=>import('./Header'));
const Footer = lazy(()=>import('./Footer'));

const Admin = ()=>{
    let authCode = 0;

	const [authorization, setAuthorization] = useState(authCode);

	const api_url = process.env.REACT_APP_API_URL;

    let token: any = '';

	if (localStorage.getItem('access') === '') {
		token = sessionStorage.getItem('access');
	} else {
		token = localStorage.getItem('access');
	}
    

    useEffect(() => {

		checkToken();


	});

    window.addEventListener('storage', () => {

		token = window.localStorage.getItem('access');

		const newToken = checkToken();

		if (token !== newToken) {
			window.location.reload()
		}

	});

    const checkToken = () => {

		fetch(`${api_url}/sistema/login/auth`, {
			method: "GET",
			headers: { "Authorization": `Bearer ${token}` }
		})
		.then((result) => {
			setAuthorization(result.status)
		})
		.catch(function() {
			setAuthorization(404)
		});

	}

	return (
		<>
		<Header title="Início - " />

			{authorization === 200 ? 
				<Wrapper />
			 : 
			 	<Login api={api_url}
			/>}

		<Footer />
		<AsideControl />
		</>
	);

   

}

export default Admin;