import React, { lazy } from 'react';
import Typewriter from 'typewriter-effect';

//Custom Imports
import './body.scss';

import H2 from '../Others/h2';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Header = lazy(() => import('../Header'));
const Footer = lazy(() => import('../Footer'));
const Portfolio = lazy(() => import('./portfolio'));

const Body = () => {

    const business = ['uma barbearia', 'um escritório', 'um petshop', 'uma mercearia', 'uma botique', 'um comércio', 'uma sapataria', 'uma farmacia', 'uma marca'];

    return (
        <>
            <Header />
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

                <hr />

                <section id="about">
                    <H2 text="Quem sou eu?" />

                    <div className="me">
                        <div className="img">
                            <picture>
                                <source srcset="assets/images/roberto-griel-filho.webp" type="image/webp" />
                                <img loading="lazy" src="assets/images/roberto-griel-filho.jpg" alt="Roberto Griel Filho" />
                            </picture>
                        </div>
                        <div className="text">
                            <p>Olá. Meu nome é Roberto Griel Filho.</p>

                            <p>Sou natural de Limeira, São Paulo e moro há mais de 10 anos em Nova Serrana, Minas Gerais.</p>

                            <p>Sempre fui apaixonado por tecnologia, desenvolvimento e por essa mágica de transformar linhas de código em aplicações incríveis.</p>
                        </div>
                    </div>

                    <Link to="/sobre" style={{textAlign: 'center'}}>
                        <Button variant="contained" color="primary">Quer saber mais?</Button>
                    </Link>

                </section>

                <hr />

                <Portfolio />

            </main>
            <Footer />
        </>
    );

}

export default Body;