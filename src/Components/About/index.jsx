import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import H2 from '../Others/h2';
import './certificate.scss';

import './about.scss';

const certificates = [
    {
        name: 'Hcode Lab Back End Developer',
        jpg: '../../assets/images/JPG/backend.jpg',
        webp: '../../assets/images/WEBP/backend.webp',
        medium: '../../assets/images/certificates/backend@1x.jpg',
        full: '../../assets/images/certificates/backend@2x.jpg'
    },
    {
        name: 'Hcode Lab Database Developer',
        jpg: '../../assets/images/JPG/database.jpg',
        webp: '../../assets/images/WEBP/database.webp',
        medium: '../../assets/images/certificates/database@1x.jpg',
        full: '../../assets/images/certificates/database@2x.jpg',
    },
    {
        name: 'Hcode Lab JavaScript Developer',
        jpg: '../../assets/images/JPG/js.jpg',
        webp: '../../assets/images/WEBP/js.webp',
        medium: '../../assets/images/certificates/js@1x.jpg',
        full: '../../assets/images/certificates/js@2x.jpg'
    },
    {
        name: 'Hcode Lab Webstarter HTML5 & CSS3',
        jpg: '../../assets/images/JPG/html.jpg',
        webp: '../../assets/images/WEBP/html.webp',
        medium: '../../assets/images/certificates/html@1x.jpg',
        full: '../../assets/images/certificates/html@2x.jpg'
    },
    {
        name: 'Curso Design com Figma',
        jpg: '../../assets/images/JPG/design-figma.jpg',
        webp: '../../assets/images/WEBP/design-figma.webp',
        medium: '../../assets/images/certificates/design-figma@1x.jpg',
        full: '../../assets/images/certificates/design-figma@2x.jpg',
    },
    {
        name: 'Curso NodeJS',
        jpg: '../../assets/images/JPG/node.jpg',
        webp: '../../assets/images/WEBP/node.webp',
        medium: '../../assets/images/certificates/node@1x.jpg',
        full: '../../assets/images/certificates/node@2x.jpg',
    },
    {
        name: 'Curso Integrando PagSeguro com PHP7',
        jpg: '../../assets/images/JPG/curso-php7-pagseguro.jpg',
        webp: '../../assets/images/WEBP/curso-php7-pagseguro.webp',
        medium: '../../assets/images/certificates/curso-php7-pagseguro@1x.jpg',
        full: '../../assets/images/certificates/curso-php7-pagseguro@2x.jpg',
    },
    {
        name: 'Curso Completo de PHP7',
        jpg: '../../assets/images/JPG/curso-php7.jpg',
        webp: '../../assets/images/WEBP/curso-php7.webp',
        medium: '../../assets/images/certificates/curso-php7@1x.jpg',
        full: '../../assets/images/certificates/curso-php7@2x.jpg',
    },
    {
        name: 'Curso Dominando Banco de Dados MySQL',
        jpg: '../../assets/images/JPG/curso-mysql.jpg',
        webp: '../../assets/images/WEBP/curso-mysql.webp',
        medium: '../../assets/images/certificates/curso-mysql@1x.jpg',
        full: '../../assets/images/certificates/curso-mysql@2x.jpg',
    },
];

const About = () => {

    let [modalStatus, setModalStatus] = useState(false);
    let [certificate, setCertificate] = useState('');
    let [fullCertificate, setFullCertificate] = useState('');

    const openModal = (e) => {


        setModalStatus(true)

        setCertificate(e.target.dataset.medium);
        setFullCertificate(e.target.dataset.full);

    }

    useEffect(() => {
        const modal = document.querySelector('.certificate-modal');
        if (modal) {



            modal.addEventListener('click', () => {
                modal.classList.add('close')
                setTimeout(() => {
                    setModalStatus(false);
                    modal.classList.remove('close')
                    setCertificate('')
                }, 1000)
                
            });
        }
    }, []);



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
                                        <img loading="lazy" src={certificate.jpg} alt={certificate.name} data-full={certificate.full} data-medium={certificate.medium} onClick={openModal} />
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


            <div className={modalStatus ? 'certificate-modal open' : 'certificate-modal'}>
                <div className="certificate-modal-body">
                    <img src={certificate} />
                </div>
                <div className="certificate-modal-footer">
                    <a className='btn btn-primary' href={fullCertificate} target="_blank">Qualidade máxima</a>
                </div>
            </div>
        </>
    );
}

export default About;