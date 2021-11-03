import React from 'react';

//Custom Imports
import './index.scss';
import Logo from '../../Assets/Images/PNG/logo.png';
import Menu from './Menu';

const Header = ()=>{
    return (
        <>
            <header>
            <img src={Logo} alt="Griel Website" />

            <Menu/>
            </header>
        </>
    );
}

export default Header;