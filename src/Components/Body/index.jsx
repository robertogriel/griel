import React, { lazy } from 'react';
import Typewriter from 'typewriter-effect';

//Custom Imports
import './body.scss';
import About from './about';


const Header = lazy(()=>import('../Header'));
const Footer = lazy(()=>import('../Footer'));

const Body = ()=>{

    const business = ['uma barbearia','um escritório','um petshop','uma mercearia','uma botique','um comércio','uma sapataria','uma farmacia', 'uma marca'];

    return (
        <>
        <Header/>
        <main id="index">
            <section id="top">
                <div className="typing">
                    <p>Se você tem</p>
                    <strong id="typer">
                    <Typewriter
                        options={{
                            strings: business,
                            autoStart: true,
                            loop: true,
                            speed: 'natural'
                        }}
                    />
                    </strong>
                    <p>você precisa de um site!</p>
                </div>
            </section>

            <hr/>

            <About />

            
        </main>
        <Footer/>
        </>
    );

}

export default Body;