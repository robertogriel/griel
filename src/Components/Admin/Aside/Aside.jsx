import jwt_decode from "jwt-decode";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Aside = () => {

    const [username, setUsername] = useState('');
    const [userPhoto, setUserphoto] = useState('');
    const [catalogMenu, setCatalogMenu] = useState(false);

    useEffect(() => {

        let token = '';

        if (localStorage.getItem('access') === null) {
            token = sessionStorage.getItem('access')
        } else {
            token = localStorage.getItem('access');
        }

        if (token) {

            const data = jwt_decode(token);

            setUsername(data.name)
            setUserphoto(data.photo)

        }
    }, []);

    const menuHandler = () => { let menu = !catalogMenu; setCatalogMenu(menu); }










    // }


    return (
        <>

            <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <a href="assets/index3.html" className="brand-link">
                    <img src="./assets/admin-lte/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{
                        opacity: .8
                    }} />
                    <span className="brand-text font-weight-light">Administração</span>
                </a>


                <div className="sidebar">

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={(userPhoto) ? userPhoto : `./assets/images/no-photo.png`} className="img-circle elevation-2" alt={username} />
                        </div>
                        <div className="info">
                            <a href="/" className="d-block">{username}</a>
                        </div>
                    </div>


                    {/* <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
                <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
                </button>
            </div>
            </div>
        </div> */}


                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className="nav-item">
                                <Link to="/admin/" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Painel
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link title="Clientes" to="/admin/clientes" className="nav-link">
                                    <i className="nav-icon fa fa-user fw"></i>
                                    <p>
                                        Clientes
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link title="Clientes" to="/admin/servicos" className="nav-link">
                                    <i className="nav-icon nav-icon fa fa-solid fa-briefcase"></i>
                                    <p>
                                        Serviços
                                    </p>
                                </Link>
                            </li>
                            <li className={(catalogMenu) ? 'nav-item menu-open' : 'nav-item'}>
                                <button className="nav-link" onClick={menuHandler}>
                                    <i className="nav-icon fas fa-copy"></i>
                                    <p>
                                        Catálogo
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </button>
                                <ul className="nav nav-treeview" style={(catalogMenu) ? { display: 'flex' } : { display: 'none' }}>
                                    <li className="nav-link">
                                        <Link to="/categorias" className="nav-item">
                                            <i className="nav-icon far fa-circle"></i>
                                            <p>  Categorias</p>
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </nav>

                </div>

            </aside>

        </>
    );
}

export default Aside;