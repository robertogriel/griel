import { useEffect, useState } from "react";
import styled from "styled-components"
import { MenuItem } from "../Menu/MenuItem";
import axios from 'axios';

const HeaderTag = styled.header`
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 5px var(--space);
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
    cursor: pointer;
    transform: scale(0.9);
    transition: 0.5s;
    &:hover {
        transform: scale(1);
        opacity: 0.9;
    }
  }
`

const Menu = styled.nav`
    flex-direction: column;
    background-color: rgba(1,48,63,0.75);
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
    
    border-radius: 0 0 var(--space) var(--space);
    &.open {
        overflow: auto;
        height: 370px;
        transition: all 1s ease-out;
        border-bottom: 1px solid var(--blue-1);
    }
    ul, li {
        margin: 0;
        padding: 0;
        flex-direction: column;
    }
    ul {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: auto;
        grid-gap: var(--space);
        padding: 5px;
        li {
            a {
                background-color: var(--blue-1);
                padding: var(--space);
                align-items: flex-start;
                border-radius: var(--space);
                min-height: 73px;
                box-shadow: 1px 1px 2px rgb(0 0 0 / 25%);
                img {
                    margin-right: var(--space);
                    margin-top: var(--space);
                    width: 30px;
                }
                div {
                    &.wrap {
                        flex-direction: column;
                        strong, small {
                            color: var(--white);
                        }
                        strong {
                            font-size: 18px;
                            margin: var(--space) 0;
                        }
                        small {
                            font-size: 17px;
                            font-weight: 300;
                        }
                    }
                }
                &:hover {
                    background-color: #0474a3;
                }
            }
        }
    }
    footer {
        border-top: 1px solid var(--blue-1);
        color: var(--white);
        height: 50px;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        padding: var(--space) var(--space);
        div {
            &.icons {
                a {
                    img {
                        margin-left: var(--space);
                    }
                }
            }
        }
    }
`

export default function Header() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [menuList, setMenuList] = useState<any[]>()

    const getMenuList = async ()=>{

        console.log('chegou no menulist')

        await axios.get(`/api/menu`)
        .then(({data})=>{
            setMenuList(data)
        })
        .catch((e:any)=>{
            console.log(e.message)
        })

    }

    useEffect(()=>{
        getMenuList();
    },[])

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
                    {menuList && menuList.map((item, index)=>(
                        <MenuItem key={index} href={item.href} icon={item.icon} alt={item.alt} strong={item.strong} small={item.small} />
                    ))}
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