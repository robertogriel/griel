import * as React from 'react';

import LoadingImg from '../../Assets/Images/SVG/loading_inline.svg';

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