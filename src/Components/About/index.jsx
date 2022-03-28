import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import H2 from '../Others/h2';

import './about.scss';

const certificates = [
    {
        name: 'Hcode Lab Back End Developer',
        jpg: '../../assets/images/JPG/backend.jpg',
        webp: '../../assets/images/WEBP/backend.webp'
    },
    {
        name: 'Hcode Lab Database Developer',
        jpg: '../../assets/images/JPG/database.jpg',
        webp: '../../assets/images/WEBP/database.webp'
    },
    {
        name: 'Hcode Lab JavaScript Developer',
        jpg: '../../assets/images/JPG/js.jpg',
        webp: '../../assets/images/WEBP/js.webp'
    },
    {
        name: 'Hcode Lab Webstarter HTML5 & CSS3',
        jpg: '../../assets/images/JPG/html.jpg',
        webp: '../../assets/images/WEBP/html.webp'
    },
];

const About = () => {
    return (
        <>
            <Header />
            <main id="about">
                <H2 text="Quem sou eu?" />

                <div className="me">
                    <div className="img">
                        <picture>
                            <source srcSet="assets/images/roberto-griel-filho.webp" type="image/webp" />
                            <img loading="lazy" src="assets/images/roberto-griel-filho.jpg" alt="Roberto Griel Filho" />
                        </picture>
                    </div>
                    <div className="text">
                        <p>Olá. Meu nome é Roberto Griel Filho.</p>

                        <p>Sou natural de Limeira, São Paulo e moro há mais de 10 anos em Nova Serrana, Minas Gerais.</p>

                        <p>Sempre fui apaixonado por tecnologia, desenvolvimento e por essa mágica de transformar linhas de código em aplicações incríveis.</p>
                    </div>
                </div>
                <hr />
                <section id="certificates">
                    <H2 text="Meus Certificados" />

                    <div className="certificates">

                        {certificates && certificates.map((certificate, index) => (

                            <div key={index} className="certificate">

                                <div className="certificate-image">
                                    <picture>
                                        <source srcSet={certificate.webp} type="image/webp" />
                                        <img loading="lazy" src={certificate.jpg} alt={certificate.name} />
                                    </picture>
                                </div>
                                <div className="certificate-name">
                                <p>{certificate.name}</p>
                                </div>

                            </div>

                        ))}

                        
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
}

export default About;