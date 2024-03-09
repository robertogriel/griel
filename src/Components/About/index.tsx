import styled from 'styled-components'

const AboutTag = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: var(--space);
  height: 100%;
  picture {
    img {
      width: 40vw;
      height: auto;
      max-width: 200px;
      justify-content: center;
    }
  }
  h2 {
    color: var(--white);
    font-size: 20px;
    margin-top: 20px;
    text-align: center;
  }
`

export default function About() {
  return (
    <AboutTag id="about">
      <picture>
        <source srcSet="/images/webp/about.webp" type="image/webp" />
        <img loading="lazy" src="/images/png/about.png" alt="Roberto Griel Filho" />
      </picture>
      <h2>
        Sempre fui apaixonado por tecnologia, desenvolvimento e por essa mágica de transformar linhas de código em
        aplicações incríveis.
      </h2>
    </AboutTag>
  )
}
