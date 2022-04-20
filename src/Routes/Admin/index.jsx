import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBriefcase, faFileContract, faWallet } from '@fortawesome/free-solid-svg-icons'

import './admin.scss';


export default function Admin() {

  const [lateralMenu, setLateralMenu] = useState(true);

  

  const lateralMenuHandler = () => {

    const lateralMenuAside = document.querySelector("main#admin aside");
    const lateralMenuBtn = document.querySelector("div.lateral-menu");

    setLateralMenu(!lateralMenu);

    if (lateralMenu) {
      lateralMenuAside.classList.add('open');
      lateralMenuBtn.classList.add('open');
    } else {
      lateralMenuAside.classList.remove('open');
      lateralMenuBtn.classList.remove('open');
    }


  }


  return (
    <main id="admin">
      <div className="lateral-menu">
        <button onClick={lateralMenuHandler}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M16 16h4v4h-4v-4Zm-6 0h4v4h-4v-4Zm-6 0h4v4H4v-4Zm12-6h4v4h-4v-4Zm-6 0h4v4h-4v-4Zm-6 0h4v4H4v-4Zm12-6h4v4h-4V4Zm-6 0h4v4h-4V4ZM4 4h4v4H4V4Z" /></svg></button>
      </div>
      <aside>
        <header>
          <h2>Painel Administrativo</h2>
          <button onClick={lateralMenuHandler}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z" /></svg></button>
        </header>
        <ul>
          <li>
          <FontAwesomeIcon icon={faUser} />
            <a href="/admin/clientes">Clientes</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faBriefcase} />
            <a href="/admin/servicos">Serviços</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faFileContract} />
            <a href="/admin/contratos">Contratos</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faWallet} />
            <a href="/admin/fatura">Faturas</a>
          </li>
        </ul>
      </aside>
      <section>
        


      </section>
    </main>
  )
}
