import React from 'react';
import Aside from './Aside/Aside';
import Contents from './Contents';


import Nav from './Header/nav';

const Wrapper = ()=>{
    return (
        <>
        <Nav />
        <Contents />
        <Aside />
        </>
    );
}

export default Wrapper;