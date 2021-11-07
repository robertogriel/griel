import React from 'react';
import { Link } from "react-router-dom";

//Custom Imports
import './index.scss';
import Logo from '../../Assets/Images/PNG/logo.png';
import Menu from './Menu';
import Wave from './Wave';

const Header = ()=>{

	return (
		<>
			<header>
				<div className="background">
					<Wave/>
				</div>
				<div className="content">
					<Link to="/">
					<img src={Logo} alt="Griel Website" />
					</Link>
					<Menu/>
				</div>

			</header>
		</>
	);
}

export default Header;