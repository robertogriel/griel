import React, { useState } from 'react';
import Loading from './Loading';
import Button from '@material-ui/core/Button';
import './domains.scss';
import dotcombr from '../../Assets/Images/PNG/dotcombr.png';
import dotcom from '../../Assets/Images/PNG/dotcom.png';
import axios from 'axios';


const Domains = () => {

    const [getDomainBR, setDomainBR] = useState(null);
    const [getDomainCOM, setDomainCOM] = useState(null);
    const [getDomain, setDomain] = useState(null);

    const API_URL = 'http://localhost:8080';

    const checkDomain = (domain) => {

        let url = '';

        if (domain.split('.')[0] === 'www') {
            url = domain.split('.')[1];
        } else {
            url = domain.split('.')[0];
        }

        setDomain(domain.split('.')[0])


        axios.get(`${API_URL}/domains?d=${url}.com.br`)
            .then(result => {

                const avaliabity = result.data.res;

                if (avaliabity === 'ok') {
                    setDomainBR(`O domínio ${url}.com.br está disponível!`);
                }
                if (avaliabity === 'nok') {
                    setDomainBR(`O domínio ${url}.com.br NÃO está disponível!`);
                }


        })
        axios.get(`${API_URL}/domains?d=${url}.com`)
            .then(result => {

                const avaliabity = result.data.res;

                if (avaliabity === 'ok') {
                    setDomainCOM(`O domínio ${url}.com está disponível!`);
                }
                if (avaliabity === 'nok') {
                    setDomainCOM(`O domínio ${url}.com NÃO está disponível!`);
                }


        })

    }

    window.addEventListener("load", function () {
        if (window.location.search && window.location.search.split('=')[0] === '?domain') {

            checkDomain(window.location.search.split('=')[1]);

            document.querySelector("input[name=domain]").value = window.location.search.split('=')[1];
        }
    });





    return (
        <>
        <main id="domains">

            <section id="domain-search">

                <header>
                    <h1>Cheque a disponibilidade de seu domínio</h1>
                </header>
                <article>

                    <form>
                        <input type="text" name="domain" className="form-control" />
                        <br />
                        <Button type="button" variant="contained" id="search-domain-button" color="primary" onClick={(e) => {

                            e.preventDefault();

                            let domain = document.querySelector("input[name=domain]").value;

                            checkDomain(domain)
                        }}>Checar</Button>
                    </form>

                </article>

            </section>
            {getDomain &&
                <section id="results">

                    <div className="ext">

                        <div className="title">
                            <img src={dotcombr} alt="Domínio .com.br" />
                            <p>{getDomain}.com.br</p>
                        </div>
                        <div className="text">
                            <p>{getDomainBR ? getDomainBR : <Loading />}</p>
                        </div>

                    </div>

                    <div className="ext">

                        <div className="title">
                            <img src={dotcom} alt="Domínio .com" />
                            <p>{getDomain}.com</p>
                        </div>
                        <div className="text">
                            <p>{getDomainCOM ? getDomainCOM : <Loading />}</p>
                        </div>

                    </div>


                </section>
            }


        </main>

        </>
    );
}


export default Domains;