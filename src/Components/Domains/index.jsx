import React, {useState, Suspense} from 'react';
import Loading from './Loading';
import Button from '@material-ui/core/Button';
import './domains.scss';
import dotcombr from '../../Assets/Images/PNG/dotcombr.png';
import dotcom from '../../Assets/Images/PNG/dotcom.png';

//import CheckDomains from './CheckDomains.jsx';


const Domains = ()=>{

    const [getDomainBR, setDomainBR] = useState(null);
    const [getDomainCOM, setDomainCOM] = useState(null);
    const [getDomain, setDomain] = useState(null);

    const checkDomain = (domain)=>{

        let url = '';

        if (domain.split('.')[0] === 'www') {
            url = domain.split('.')[1];
        } else {
            url = domain.split('.')[0];
        }

        /*if (domain.split('.')[1]) {
            url = `${domain.split('.')[1]}`
        } else {
            url = `${domain.split('.')[0]}`
        }*/

        setDomain(domain.split('.')[0])

        console.log(url);

        fetch(`https://www.griel.dev.br/api/domains?d=${url}.com.br`, {
            method: 'GET',
            mode: 'no-cors'
        })
        .then((resp) => resp.json())
        .then(function(data) {

            if (data.res === 'ok') {
                setDomainBR(`O domínio ${url}.com.br está disponível!`);
            }
            if (data.res === 'nok') {
                setDomainBR(`O domínio ${url}.com.br NÃO está disponível!`);
            }
        });

        fetch(`https://www.griel.dev.br/api/domains?d=${url}.com`, {
            method: 'GET'
        })
        .then((resp) => resp.json())
        .then(function(data) {

            if (data.res === 'ok') {
                setDomainCOM(`O domínio ${url}.com está disponível!`);
            }
            if (data.res === 'nok') {
                setDomainCOM(`O domínio ${url}.com NÃO está disponível!`);
            }
        });

    }

    window.addEventListener("load", function(){
        if (window.location.search && window.location.search.split('=')[0] === '?domain') {
            
            checkDomain(window.location.search.split('=')[1]);

            document.querySelector("input[name=domain]").value = window.location.search.split('=')[1];
        }
    });



    

    return (
        <main id="domains">

            <section id="domain-search">

                <header>
                    <h1>Cheque a disponibilidade de seu domínio</h1>
                </header>
                <article>

                    <form>
                        <input type="text" type="text" name="domain" className="form-control" />
                        <br/>
                        <Button type="button" variant="contained" id="search-domain-button" color="primary" onClick={(e)=>{

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
                        <p>{getDomainBR ? getDomainBR : <Loading/>}</p>
                    </div>

                </div>

                <div className="ext">

                    <div className="title">
                        <img src={dotcom} alt="Domínio .com" />
                        <p>{getDomain}.com</p>
                    </div>
                    <div className="text">
                        <p>{getDomainCOM ? getDomainCOM : <Loading/>}</p>
                    </div>

                </div>
                

            </section>
            }
            

        </main>
    );
}


export default Domains;