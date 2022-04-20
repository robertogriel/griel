import * as React from 'react';

import LoadingImg from '../../Assets/Images/SVG/loading.svg';

import './loading.scss';

const Loading:React.FunctionComponent<{}> = ()=>{
    return (
        <>
        <main id="loading">
        <img style={{
                opacity: 0.5
        }} src={LoadingImg} alt="Aguarde. Carregando..." />
        </main>
        </>
    );
}

export default Loading;