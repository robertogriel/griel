import * as React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

//Custom Imports
import './index.scss';
import Logo from '../../Assets/Images/PNG/logo.png';
import Menu from './Menu';
import Wave from './Wave';

const Header: React.FunctionComponent<{}> = () => {

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<link rel="icon" href="/favicon.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#0B2954" />
				<meta name="description" content="Desenvolvedor Web freelancer. Apaixonado por tecnologia, programação e café ☕" />
				<link rel="apple-touch-icon" href="/logo192.png" />

				<link rel="manifest" href="/manifest.json" />
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9499283313908117" crossOrigin="anonymous"></script>
				<title>Griel Dev</title>
			</Helmet>
			<header>
				<div className="background">
					<Wave />
				</div>
				<div className="content">
					<Link to="/">
						<img src={Logo} alt="Griel Website" />
					</Link>
					<Menu />
				</div>

			</header>
		</>
	);
}

export default Header;