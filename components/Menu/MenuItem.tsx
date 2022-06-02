import Link from "next/link"
import styled from "styled-components"
import { MenuItemTypes } from "../../types/menu/MenuItem"

const MenuBox = styled.li`
    background-color: #FFF;
    background-image: linear-gradient(#fff, rgb(250,250,250));
    margin: 10px;
    border-radius: 10px;
    border: 1px solid rgba(188,188,188,0.60);
    box-shadow: 1px 1px 2px rgb(0 0 0 / 25%);
    > a {
        flex-direction: row;
        padding: 10px;
    }
`

const MenuText = styled.div`
    flex-direction: column;
    margin-left: 10px;
    justify-content: center;
    strong, small {
        color: var(--dark);
    }
`

export default function MenuItem({href, icon, alt, strong, small}:MenuItemTypes) {

    let iconSelected:string = '';

    switch(icon) {
        case 'home':
            iconSelected = 'menu-home';
        break;
        case 'certificate':
            iconSelected = 'menu-certificate';
        break;
        case 'portfolio':
            iconSelected = 'menu-portfolio';
        break;
        case 'ecommerce':
            iconSelected = 'menu-ecommerce';
        break;
        case 'contact':
            iconSelected = 'menu-contact';
        break;
        default:
            iconSelected = 'menu-home';
    }

    return (
        <>
            <MenuBox>
                <Link href={href}>
                <a>
                    <div className="item">
                        <div className="icon">
                            <img src={`./images/svg/${iconSelected}.svg`} alt={alt} />
                        </div>
                        <MenuText className="text">
                            <strong>{strong}</strong>
                            <small>{small}</small>
                        </MenuText>
                    </div>
                </a>
                </Link>
            </MenuBox>
        </>
    )
}