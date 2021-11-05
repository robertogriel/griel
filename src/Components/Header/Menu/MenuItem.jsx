import React from 'react';

const MenuItem = (props)=>{

    return (
        <>
            <a href={props.link} className={props.class}>
                <li>
                    {props.children}
                </li>
            </a>
        </>
    );
}

export default MenuItem;