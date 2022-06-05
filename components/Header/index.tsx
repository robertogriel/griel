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

export default function Header() {
    return (
        <HeaderTag>
          <picture>
            <source srcSet="/images/webp/logo.webp" type="image/webp" />
            <img loading="lazy" src="/images/png/logo.png" alt="Griel Developer" />
          </picture>
          <button>
            <img src="/images/svg/menu-open.svg" alt="" />
          </button>
        </HeaderTag>
    )
}