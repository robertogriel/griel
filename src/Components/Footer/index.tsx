import styled from 'styled-components'

const FooterTag = styled.footer`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    height: 60px;
    border-top: 1px solid var(--blue-1);
    width: 100%;
    justify-content: flex-end;
    div {
      &.icons {
        width: 100%;
        justify-content: flex-end;
        padding: 10px;
        div {
          &.icon {
            margin: 0 5px;
          }
        }
      }
    }
  }
`

export default function Footer() {
  return (
    <FooterTag>
      <div className="icons">
        <div className="icon">
          <a href="https://www.linkedin.com/in/roberto-griel-filho/" target="_blank" rel="noreferrer">
            <img src="/images/svg/icon-linkedin.svg" alt="Encontre-me no LinkedIn" />
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/robertogriel" target="_blank" rel="noreferrer">
            <img src="/images/svg/icon-github.svg" alt="Encontre-me no Github" />
          </a>
        </div>
      </div>
    </FooterTag>
  )
}
