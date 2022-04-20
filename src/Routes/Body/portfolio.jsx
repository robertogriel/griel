import React from 'react';
import Box from '../../Components/Box';
import H2 from '../../Components/h2';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const sites = [
    {
        name: "Tribo Shoes",
        type: "Loja Virtual",
        link: "https://www.triboshoes.com",
        img: "https://www.triboshoes.com/image/catalog/Sistema/logo.png"
    },
    {
        name: "Life Kids",
        type: "Loja Virtual",
        link: "https://www.lifekidsns.com",
        img: "https://www.lifekidsns.com/image/catalog/Sistema/logo100.png"
    },
    {
        name: "Levit Calçados",
        type: "Loja Virtual",
        link: "https://www.levitcalcados.com",
        img: "https://www.levitcalcados.com/image/catalog/Sistema/logo2.jpg"
    },
    {
        name: "Rhastreio",
        type: "Site Institucional",
        link: "https://www.rhastreio.com.br",
        img: "https://www.rhastreio.com.br/html/res/images/logosite.png"
    },

]

const Portfolio = () => {
    return (
        <>
            <section id="portfolio">
                <H2 text="Portfólio" />
                <div className="boxes">
                    {sites && sites.map((site, index) => {
                        return (
                            <Box
                                key={index}
                                name={site.name}
                                type={site.type}
                                link={site.link}
                                img={site.img}
                            />
                        )
                    }
                    )}

                </div>
                <br/>
                <Link to="/portfolio">
                    <Button variant="contained" color="primary">Ver todos</Button>
                </Link>
            </section>
        </>
    );
};

export default Portfolio;