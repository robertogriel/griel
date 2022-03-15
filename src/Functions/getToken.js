export function getToken(){

    let token = '';

    if (localStorage.getItem('access') === null) {
        token = sessionStorage.getItem('access')
    } else {
        token = localStorage.getItem('access');
    }

    return token;

}

