import type { NextPage } from 'next'
import styled from 'styled-components'
import About from '../components/About'
import Header from '../components/Header'

import { HtmlHead } from '../components/Html/Head'

const Container = styled.main`
  background-color: #01303f;
  width: 100%;
  flex-direction: column;
`

const Hero = styled.section`
  height: 100vh;
  background-image: url('./images/background.webp');
  width: 100%;
  background-size: contain;
  background-position: center;
  background-position-y: 0px;
  background-repeat: no-repeat;
  flex-direction: column;
  position: relative;
`

const Home: NextPage = () => {
  return (
    <>
      <HtmlHead title="Griel Developer" metaDescription="Transformo sua ideia em uma aplicação incrível" />

      

      <Container>
      
        <Hero>
        <Header />

        <About />

        </Hero>

      </Container>
    </>
  )
}

export default Home
