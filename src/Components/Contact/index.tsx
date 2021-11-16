import React from 'react';
import './contact.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Contact = ()=>{

    

    
    
    async function getFormCode(){

        let formCode = '';
        

        await fetch('http://127.0.0.1:8000/form-code', {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            headers: {
                "Content-Type": "application/json"
            }
        }).
        then(response => response.json()).
        then(data => {
            return data.code
        })

        let input = document.querySelector("#formCode") as HTMLInputElement;

        console.log(input, data.code)
        
    }
    
    getFormCode()
    



    return (
        <>

        <main id="contact">
            <header>
                <h1>contato</h1>
                <h2>Deixe sua mensagem neste formulário de contato e irei te responder o mais breve possível.</h2>
            </header>
            <section id="form">

                <br/>
                <form action="http://127.0.0.1:8000/contato" method="POST">
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Seu nome:</label>
                        <input type="text" name="name" className="form-control" placeholder="Digite aqui seu nome" required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Seu e-mail:</label>
                        <input type="email" name="email" className="form-control" placeholder="Digite aqui seu e-mail" required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="subject">Assunto:</label>
                        <input type="text" name="subject" className="form-control" placeholder="Assunto de seu contato" required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Seu nome:</label>
                        <textarea className="form-control" name="message" id="message" rows={5}></textarea>
                    </div>
                    <input type="text" id="formCode" />
                    <br/>
                    <div className="form-group">
                        <button type="submit" className="btn btn-lg btn-primary">Enviar</button>
                    </div>
                </form>
            </section>
        </main>

        </>
    );
}

export default Contact;