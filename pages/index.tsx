import type { NextPage } from 'next'
import styled from 'styled-components'
import About from '../components/About'
import Header from '../components/Header'
import { HtmlHead } from '../components/Html/Head'
import Typewritter from '../components/Typewritter'


const Container = styled.main`
  background-image: url('/images/png/background.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: -20px;
  flex-direction: column;
  border: 1px solid var(--blue-1);
  border-radius: var(--space);
  height: 96vh;
  margin: 10px;
`

const Wrappper = styled.div`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media only screen and (orientation:landscape)  {
    flex-direction: row;
  }
`

const Hero = styled.section`
  width: 100%;
  height: fit-content;
  min-height: 130px;
  flex-direction: column;
  padding: var(--space);
  padding-top: 60px;
  p, h1 {
    color: var(--white);
    font-weight: 600;
    font-size: 30px;
    margin: 0;
  }
  h1 {
    font-family: 'FiraCode', serif;
    font-size: 23px;
  }
  @media only screen and (orientation: landscape) {
    flex: 1;
  }
`



const Home: NextPage = () => {
  return (
    <>
      <HtmlHead title="Griel Developer" metaDescription="Transformo sua ideia em uma aplicação incrível" />

      <Container>
        <Header />

        <Wrappper>
          <Hero>
            <p>Olá, eu sou</p>
            <h1>Roberto Griel Filho</h1>
            <Typewritter />

          </Hero>

          <About />

        </Wrappper>


      </Container>


    </>
  )
}

export default Home
