import React, { useState } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

//Custom Imports
import './footer.scss';

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
        </footer>
    );
}

export default Footer;