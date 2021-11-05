import React from 'react';
import Typewriter from 'typewriter-effect';

//Custom Imports
import './body.scss';

const Body = ()=>{

    const business = ['uma barberaria','um escritório','um petshop','uma mercearia','uma botique','um comércio','uma sapataria','uma farmacia', 'uma marca'];

    return (
        <>
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

            
        </main>
        </>
    );

}

export default Body;