import React from 'react';
import Box from '../Others/Box';
import H2 from '../Others/h2';

const sites = [
    {
        name: "Life Shoes",
        type: "Loja Virtual",
        link: "https://www.lifeshoesns.com",
        img: "https://www.lifeshoesns.com/image/catalog/Sistema/logo100.png"
    },
    {
        name: "Life Kids",
        type: "Loja Virtual",
        link: "https://www.lifekidsns.com",
        img: "https://www.lifekidsns.com/image/catalog/Sistema/logo100.png"
    },
    ,
    {
        name: "Levit Calçados",
        type: "Loja Virtual",
        link: "https://www.levitcalcados.com",
        img: "https://www.levitcalcados.com/image/catalog/Sistema/logo2.jpg"
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

            </section>
        </>
    );
};

export default Portfolio;