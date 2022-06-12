import type { NextPage } from 'next'
import styled from 'styled-components'
import CertificateBox from '../components/Certificates'
import { HtmlHead } from '../components/Html/Head'

const Certificates = styled.section`
    height: calc(100vh - 50px);
    flex-direction: column;
    padding: var(--space);
    overflow-y: auto;
`

const CertificateContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
`


const Home: NextPage = () => {
  return (
    <>
      <HtmlHead title="<Certificados /> ● Griel Developer" metaDescription="Conheça todas as minhas certificações" />

      <Certificates>
        <h1>certificados</h1>
        <p>Cada um destes certificados representam horas de estudos, muita disciplina e vontade de aprender.</p>

        <CertificateContainer>

          <CertificateBox image='backend' title='Backend' />
          
          <CertificateBox image='backend' title='Backend' />

        </CertificateContainer>

      </Certificates>
    </>
  )
}

export default Home
