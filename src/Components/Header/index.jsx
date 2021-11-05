import React from 'react';


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
					<img src={Logo} alt="Griel Website" />
					<Menu/>
				</div>

			</header>
		</>
	);
}

export default Header;