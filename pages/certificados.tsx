import axios from 'axios'
import type { GetServerSidePropsContext, NextPage } from 'next'
import styled from 'styled-components'
import CertificateBox from '../components/Certificates'
import { HtmlHead } from '../components/Html/Head'
import { CertificateTypes } from '../types/certificates/Certificates'


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


const Home: NextPage<any> = ({data}) => {

  const certificates = data;

  return (
    <>
      <HtmlHead title="<Certificados /> ● Griel Developer" metaDescription="Conheça todas as minhas certificações" />

      <Certificates>
        <h1>certificados</h1>
        <p>Cada um destes certificados representam horas de estudos, muita disciplina e vontade de aprender.</p>

        <CertificateContainer>

          {certificates && certificates.sort().reverse().map(({image, name}: CertificateTypes, index: number)=>(
            <CertificateBox key={index} image={image} name={name} />
          ))}

        </CertificateContainer>

      </Certificates>
    </>
  )
}

export default Home

export const getServerSideProps = async (context: GetServerSidePropsContext)=>{

  const {data} = await axios.get('/api/certificates', {
    baseURL: process.env.FRONT_API
  });

  return {
    props: {
      data
    }
  }

}