import React from 'react';

import './box.scss';

const Box = (props)=>{
    return (
        <>
        <div class="box">
            <a href={props.link} target="_blank" alt={props.name}>
                <div className="site_logo" style={
                    {backgroundImage: `url(${props.img})`}
                        
                        
                    }>

                </div>
            </a>
            <a href={props.link} class="name" target="_blank" alt={props.name}>
                <p>{props.name}</p>
                <small>{props.type}</small>
            </a>
            <a href={props.link} class="link" target="_blank" alt={props.name}>
                {props.link}
            </a>
        </div>
        </>
    );
}

export default Box;