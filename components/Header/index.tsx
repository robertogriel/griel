import Link from "next/link";
import styled from "styled-components";
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

export default function Header() {
    return (
        <>
            <HeaderTag>
                <Link href='/'>
                <picture className={styles.logo}>
                    <source srcSet="images/logo.webp" type="image/webp" />
                    <img loading="lazy" src="images/logo.png" alt="Griel Developer" />
                </picture>
                </Link>

                <MenuButton accessKey="m" aria-label="Abrir o menu">
                    <img src="./images/menu-open.svg" alt="Abrir o menu" />
                </MenuButton>
            </HeaderTag>
        </>
    )
}
