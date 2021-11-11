import * as React from 'react';

import LoadingImg from '../../Assets/Images/SVG/loading.svg';

const Loading:React.FunctionComponent<{}> = ()=>{
    return (
        <>
        <img style={{
                opacity: 0.5
        }} src={LoadingImg} alt="Aguarde. Carregando..." />
        </>
    );
}

export default Loading;