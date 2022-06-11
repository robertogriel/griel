import type { NextPage } from 'next'
import styled from 'styled-components'
import { HtmlHead } from '../components/Html/Head'

const Certificates = styled.section`
    height: calc(100vh - 50px);
    flex-direction: column;
    padding: var(--space);
  
`



const Home: NextPage = () => {
  return (
    <>
      <HtmlHead title="<Certificados /> ● Griel Developer" metaDescription="Conheça todas as minhas certificações" />

      <Certificates>
        <h1>certificados</h1>
        <p>Cada um destes certificados representam horas de estudos, muita disciplina e vontade de aprender.</p>


      </Certificates>
    </>
  )
}

export default Home
