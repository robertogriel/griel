import React from 'react';
import { Link } from "react-router-dom";

const MenuItem = (props)=>{

    return (
        <>
            <Link to={props.link} className={props.class}>
            
                <li>
                    {props.children}
                </li>
            
            </Link>
        </>
    );
}

export default MenuItem;