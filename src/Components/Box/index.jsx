import React from 'react';

import './box.scss';

const Box = (props)=>{
    return (
        <>
        <div className="box">
            <a rel="noreferrer" href={props.link} target="_blank" alt={props.name}>
                <div className="site_logo" style={
                    {backgroundImage: `url(${props.img})`}
                        
                        
                    }>

                </div>
            </a>
            <a rel="noreferrer" href={props.link} className="name" target="_blank" alt={props.name}>
                <p>{props.name}</p>
                <small>{props.type}</small>
            </a>
            <a rel="noreferrer" href={props.link} className="link" target="_blank" alt={props.name}>
                {props.link}
            </a>
        </div>
        </>
    );
}

export default Box;