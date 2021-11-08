import React, { useState } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

//Custom Imports
import './footer.scss';
import Logo from '../../Assets/Images/PNG/logo.png';

const ShowGoToTop = ()=>{
    let [scrollPosition, setScrollPosition] = useState(false);

    window.addEventListener("scroll", ()=>{

        const goToUpButton = document.querySelector("div.goToUp");

        let scroll = window.scrollY;

        if (scroll >= 100) {
            scrollPosition = true;
        } else {
            scrollPosition = false;
        }

        setScrollPosition(scrollPosition);

        (scrollPosition) ? goToUpButton.classList.add('scroll') : goToUpButton.classList.remove('scroll');

    });
}

const GoToTop = ()=>{
    window.scrollTo(0, 0);
}


const Footer = ()=>{

    ShowGoToTop();


    return (
        <footer>
            <div className="goToUp">
                <div onClick={GoToTop} className="icon">
                    <ArrowUpwardIcon/>
                </div>
            </div>

            <section id="contents">
                <div className="logo">
                    <img src={Logo} alt="Griel Developer" />
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/roberto-griel-filho/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon/> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/robertogriel" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon/> GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section id="final">
                <p>&copy; Roberto Griel Filho - Todos os direitos reservados</p>
                <p>Feito com muito 💙 e ☕ diretamente de Nova Serrana, Minas Gerais.</p>
            </section>
        </footer>
    );
}

export default Footer;