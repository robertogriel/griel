const login = (e)=>{

    e.preventDefault();

    console.log(e);

    fetch(`${props.api}/sistema/login`, {
        method: "POST",
        body: new FormData(e.target)
    })
    .then((response) => response.json())
    .then(function(result) {


        if (result && result.status === 403) {
            return {res: false, msg: result.message};
        } else {
            
            localStorage.removeItem('access');
            sessionStorage.removeItem('access');
            if (remember) {
                localStorage.setItem('access',result.token);
            } else {
                sessionStorage.setItem('access',result.token);
            }
            return {res: true}
        }

    })

}

export default login;