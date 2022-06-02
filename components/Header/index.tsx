import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import MenuItem from "../Menu/MenuItem";
import styles from './logo.module.scss'

const HeaderTag = styled.header`
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
`

const MenuButton = styled.button`
    background-color: transparent;
    padding: 10px;
    border: none;
    cursor: pointer;
    &:hover, &:active {
        outline-style: dashed;
        outline-width: 2px;
        outline-color: rgb(255 255 255 / 20%);
    }
`

const Navbar = styled.nav`
    position: fixed;
    background-color: rgba(255,255,255,0.9);
    right: -50vw;
    top: 0;
    width: 50vw;
    height: 100vh;
    flex-direction: column;
    z-index: 2;
    backdrop-filter: blur(3px);
    transition: all 0.5s ease-in;
    &.open {
        right: 0;
    }
    > header {
        margin-top: 25px;
        padding: 0 10px;
        justify-content: space-between;
        align-items: center;
        h2 {
            font-size: 25px;
            font-weight: 300;
        }
    }
    > ul {
        margin: 0;
        padding: 0;
        flex-direction: column;
    }
    > hr {
        border: 1px solid #02A9F7;
        width: 90%;
        margin: 0;
        margin-top: 20px;
        margin-bottom: 20px;
        align-self: center;
    }
`

const Overflow = styled.div`
    position: fixed;
    top: 0;
    left: -50vw;
    width: 50vw;
    background-color: rgb(0 0 0 / 80%);
    height: 100vh;
    z-index: 2;
    transition: all 0.5s ease-in;
    backdrop-filter: blur(3px);
    &.open {
        left: 0;
    }
`


export default function Header() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)


    return (
        <>
            <HeaderTag>
                <Link href='/'>
                    <picture className={styles.logo}>
                        <source srcSet="images/logo.webp" type="image/webp" />
                        <img loading="lazy" src="images/logo.png" alt="Griel Developer" />
                    </picture>
                </Link>

                <MenuButton accessKey="m" aria-label="Abrir o menu" onClick={()=>{setMenuOpen(!menuOpen)}}>
                    <img src="./images/svg/menu-open.svg" alt="Abrir o menu" />
                </MenuButton>
            </HeaderTag>
            <Navbar className={menuOpen ? 'open' : ''}>
                <header>
                    <h2>Navegue</h2>
                    <MenuButton accessKey="m" aria-label="Fechar o Menu" onClick={()=>{setMenuOpen(!menuOpen)}}>
                        <img src="./images/svg/menu-close.svg" alt="Fechar o menu" />
                    </MenuButton>
                </header>
                <hr />
                <ul>
                    <MenuItem href='/' icon='home' alt='Volte para a Página Inicial' strong='Home' small='Volte para a Página Inicial' />
                    <MenuItem href='/certificados' icon='certificate' alt='Veja meus certificados' strong='Certificados' small='Veja meus certificados' />
                </ul>
            </Navbar>
            <Overflow className={menuOpen ? 'open' : ''} onClick={()=>{setMenuOpen(!menuOpen)}} />
        </>
    )
}
