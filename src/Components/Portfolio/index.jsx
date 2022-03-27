import { Button } from '@material-ui/core';
import React, { lazy } from 'react';
import Box from '../Others/Box';
import H1 from '../Others/h1';
import H2 from '../Others/h2';
import './portfolio.scss';

const Header = lazy(() => import('../Header'));
const Footer = lazy(() => import('../Footer'));



const stores = [
    {
        name: "Nova Calçados",
        link: "https://www.novacalcados.com",
        img: "https://www.novacalcados.com/image/catalog/Sistema/logoBig2.png"
    },
    {
        name: "Life Shoes",
        link: "https://www.lifeshoesns.com",
        img: "https://www.lifeshoesns.com/image/catalog/Sistema/logo100.png"
    },
    {
        name: "Life Kids",
        link: "https://www.lifeKidsns.com",
        img: "https://www.lifeKidsns.com/image/catalog/Sistema/logo100.png"
    },
    {
        name: "Levit Calçados",
        link: "https://www.levitcalcados.com",
        img: "https://www.levitcalcados.com/image/catalog/Sistema/logo2.jpg"
    },
    {
        name: "Primoratta Calçados",
        link: "https://www.primoratta.com.br",
        img: "https://www.primoratta.com.br/image/catalog/Sistema/logo.min.png"
    },
    {
        name: "Destiny Calçados",
        link: "https://www.triboshoes.com",
        img: "https://www.destinycalcados.com/image/catalog/Sistema/logo.min.png"
    },
    {
        name: "Tribo Shoes",
        link: "https://www.triboshoes.com",
        img: "https://www.triboshoes.com/image/catalog/Sistema/logo.png"
    },
    {
        name: "Loja da Wivi",
        link: "https://www.lojadawivi.com",
        img: "https://www.lojadawivi.com/image/catalog/Sistema/logo1.png"
    },
    {
        name: "E-Multi Stock",
        link: "https://www.emultistock.com",
        img: "https://www.emultistock.com/image/catalog/Sistema/logo4.png"
    },
];

const sites = [
    {
        name: "Rhastreio - Rastreamento Veicular",
        link: "https://www.rhastreio.com.br",
        img: "https://www.rhastreio.com.br/html/res/images/logosite.png"
    },
    {
        name: "Politracker - Rastreadores",
        link: "https://www.politracker.com.br",
        img: "https://www.politracker.com.br/html/res/image/logo.png"
    },
    {
        name: "Karjef Rastreamento",
        link: "https://www.karjefrastreamento.com.br",
        img: "https://www.karjefrastreamento.com.br/html/res/img/logo000.png"
    },
    {
        name: "Rayon Energia",
        link: "http://www.rayonenergia.com.br",
        img: "https://www.rayonenergia.com.br/assets/images/WEBP/logo.webp"
    },
];



const PortfolioPage = () => {
    return (
        <>
            <Header />
            <main id="portfolio">
                <H1 text="Portfólio" />
                <p>Conheça meu trabalho. Nesta página estão meus projetos rodando em produção.</p>
                <p>Para projetos menores, de desenvolvimento, visite meu Github:</p>
                <a href="https://github.com/robertogriel" style={{textAlign: 'center'}}>
                <Button variant="contained" color="primary">Perfil no Github</Button>
                </a>

                <section>
                    <H2 text="lojas virtuais" />
                    <p>Lojas virtuais desenvolvidas sobre a plataforma OpenCart com inúmeras melhorias, correções e recursos de automação.</p>
                    <div className="boxes">
                        {stores && stores.map((site, index) => {
                            return (
                                <Box
                                    key={index}
                                    name={site.name}
                                    link={site.link}
                                    img={site.img}
                                />
                            )
                        }
                        )}

                    </div>
                </section>

                <section>
                    <H2 text="SITES INSTITUCIONAIS" />
                    <p>Site institucionais criados para empresas de diversos seguimentos, com foco em boas práticas, semânticas e SEO.</p>
                    <div className="boxes">
                        {sites && sites.map((site, index) => {
                            return (
                                <Box
                                    key={index}
                                    name={site.name}
                                    link={site.link}
                                    img={site.img}
                                />
                            )
                        }
                        )}

                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default PortfolioPage;