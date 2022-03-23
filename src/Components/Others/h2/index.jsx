import React from 'react';

import './h2.scss';

const H2 = (props)=>{
    return (
        <>
        <h2 className='component'>
            {props.text}
        </h2>
        </>
    );
}

export default H2;