import styled from "styled-components"

const AboutTag = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: var(--space);
  height: 100%;
  img {
    width: 100%;
    height: auto;
    max-height: 40vh;
  }
  p {
    color: var(--white);
  }
  @media only screen and (orientation: landscape) {
    flex: 1;
    img {
      width: 100px;
    }
  }
`

export default function About() {
    return (
        <AboutTag id="about">
            <picture>
              <source srcSet="/images/webp/about.webp" type="image/webp" />
              <img loading="lazy" src="/images/png/about.png" alt="Roberto Griel Filho" />
            </picture>
            <p>Sempre fui apaixonado por tecnologia, desenvolvimento e por essa mágica de transformar linhas de código em aplicações incríveis.</p>
          </AboutTag>
    )
}