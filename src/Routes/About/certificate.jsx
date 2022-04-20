import React, { useEffect, useState } from 'react';







const Certificate = (props) => {

    let [modalStatus, setModalStatus] = useState(false);

    useEffect(() => {

        const modal = document.querySelector('.certificate-modal');
    
        if (modal) {
    
            modalStatus = !modalStatus;
    
            modal.addEventListener('click', () => {
                setModalStatus(modalStatus);
                console.log(modalStatus)
            });
        }
    
    },[]);

    return (
        <>
            
            
            
        </>
    );
};

export default Certificate;