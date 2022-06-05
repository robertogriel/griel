import Link from "next/link"
import { useState } from "react";
import styled from "styled-components"

const HeaderTag = styled.header`
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 1px solid var(--blue-1);
  > picture { 
    img, source {
      height: 35px;
    }
    
  }
  > button {
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0%;
    background-color: transparent;
    border: none;
    outline: none;
  }
`

const Menu = styled.nav`
    flex-direction: column;
    background-color: rgba(1,48,63,0.95);
    backdrop-filter: blur(5px);
    width: calc(100vw - 23px);
    left: 11px;
    top: 58px;
    overflow: hidden;
    height: 0;
    position: absolute;
    z-index: 2;
    transition: all 1s ease-in;
    justify-content: space-between;
    border-bottom: 1px solid var(--blue-1);
    border-radius: 0 0 var(--space) var(--space);
    &.open {
        overflow: auto;
        height: 370px;
        transition: all 1s ease-out;
    }
    ul, li {
        margin: 0;
        padding: 0;
        flex-direction: column;
    }
    footer {
        border-top: 1px solid var(--blue-1);
        color: var(--white);
        height: 50px;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        padding: 10px 10px;
        div {
            &.icons {
                a {
                    img {
                        margin-left: 10px;
                    }
                }
            }
        }
    }
`

export default function Header() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <>
            <HeaderTag>
                <picture>
                    <source srcSet="/images/webp/logo.webp" type="image/webp" />
                    <img loading="lazy" src="/images/png/logo.png" alt="Griel Developer" />
                </picture>
                <button accessKey="m" aria-label={menuOpen ? 'Abrir o Menu' : 'Fechar o Menu'} onClick={() => { setMenuOpen(!menuOpen) }}>
                    <img src={menuOpen ? "/images/svg/menu-close.svg" : "/images/svg/menu-open.svg"} alt={menuOpen ? 'Abrir o Menu' : 'Fechar o Menu'} />
                </button>

            </HeaderTag>
            <Menu className={menuOpen ? 'open' : ''}>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>
                                <img src="/images/svg/menu-home.svg" alt="Página inicial" />
                                <div className="wrap">
                                    <strong>Home</strong>
                                    <small>Volte para a página inicial</small>
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>
                                <img src="/images/svg/menu-home.svg" alt="Página inicial" />
                                <div className="wrap">
                                    <strong>Home</strong>
                                    <small>Volte para a página inicial</small>
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>
                                <img src="/images/svg/menu-home.svg" alt="Página inicial" />
                                <div className="wrap">
                                    <strong>Home</strong>
                                    <small>Volte para a página inicial</small>
                                </div>
                            </a>
                        </Link>
                    </li>
                </ul>
                <footer>
                    <p>Onde me encontrar?</p>
                    <div className="icons">
                        <a href="linkedin">
                            <img src="/images/svg/icon-linkedin.svg" alt="" />
                        </a>
                        <a href="github">
                            <img src="/images/svg/icon-github.svg" alt="" />
                        </a>
                    </div>
                </footer>
            </Menu>
        </>
    )
}