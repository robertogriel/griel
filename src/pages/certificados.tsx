import styled from 'styled-components'
import CertificateBox from '../components/Certificates'
import { HtmlHead } from '../components/Html/Head'
import Section from '../components/Html/Main'
import { CertificateTypes } from '../types/certificates/Certificates'
import { useEffect, useState } from 'react'

const CertificatePage: React.FC = () => {
  const [certificates, setCertificates] = useState<CertificateTypes[]>()

  useEffect(() => {
    getCertificates()
  }, [])

  function getCertificates() {
    const certificateList = [
      { name: 'Hcode Lab Webstarter HTML5 & CSS3', image: 'html' },
      { name: 'Hcode Lab JavaScript Developer', image: 'javascript' },
      { name: 'Hcode Lab Database MySQL Developer', image: 'database' },
      { name: 'Hcode Lab Back End Node NestJS Developer', image: 'backend' },
      { name: 'Hcode Lab Front End React NextJS Developer', image: 'react' },
      { name: 'Hcode Lab Mobile React Native Developer', image: 'mobile' },
      { name: 'Curso NodeJS', image: 'curso-node' },
      { name: 'Curso Design com Figma', image: 'design-figma' },
      { name: 'Curso Completo de PHP7', image: 'curso-php7' },
      { name: 'Curso Integrando PagSeguro com PHP7', image: 'curso-php7-pagseguro' },
      { name: 'Curso Dominando Banco de Dados MySQL', image: 'curso-mysql' },
      { name: 'Curso WSL2', image: 'curso-wsl2' },
      { name: 'Curso Gestão de Ambiente Multigeracional', image: 'curso-ambiente-geracional' }
    ]

    setCertificates(certificateList)
  }

  return (
    <Section>
      <HtmlHead title="<Certificados /> ● Griel Developer" metaDescription="Conheça todas as minhas certificações" />
      <Title>certificados</Title>
      <Paragraph>
        Cada um destes certificados representam horas de estudos, muita disciplina e vontade de aprender.
      </Paragraph>

      <CertificateContainer>
        {certificates &&
          certificates
            .sort()
            .reverse()
            .map(({ image, name }: CertificateTypes, index: number) => (
              <CertificateBox key={index} image={image} name={name} />
            ))}
      </CertificateContainer>
    </Section>
  )
}

const CertificateContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: var(--white);
  text-transform: uppercase;
  justify-content: center;
  margin: var(--space) 0;
  @media (min-width: 768px) {
    font-size: 50px;
  }
`

const Paragraph = styled.p`
  color: var(--white);
  line-height: calc(var(--space) * 2);
  @media (min-width: 768px) {
    line-height: calc(var(--space) * 4);
    font-size: 30px;
    justify-content: center;
    text-align: center;
  }
`

export default CertificatePage
