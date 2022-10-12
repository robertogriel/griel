import axios from "axios";
import type { GetServerSidePropsContext, NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import CertificateBox from "../components/Certificates";
import Modal from "../components/Certificates/modal";
import { HtmlHead } from "../components/Html/Head";
import { CertificateModalToOpenType, CertificateTypes } from "../types/certificates/Certificates";


const CertificatePage: NextPage<any> = ({ certificates }) => {

  return (
    <>
      <HtmlHead
        title="<Certificados /> ● Griel Developer"
        metaDescription="Conheça todas as minhas certificações"
      />

      <Certificates>
        <Title>certificados</Title>
        <Paragraph>
          Cada um destes certificados representam horas de estudos, muita
          disciplina e vontade de aprender.
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
      </Certificates>
    </>
  );
};

const Home: NextPage<any> = ({ data }) => {
  return (

      <CertificatePage certificates={data} />

  );
};

const Certificates = styled.section`
  height: calc(100vh - 50px);
  flex-direction: column;
  padding: var(--space);
  overflow-y: auto;
`;

const CertificateContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
`;

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
`;

const Paragraph = styled.p`
  color: var(--white);
  line-height: calc(var(--space) * 2);
  @media (min-width: 768px) {
    line-height: calc(var(--space) * 4);
    font-size: 30px;
    justify-content: center;
    text-align: center;
  }
`;

export default Home;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { data } = await axios.get("/api/certificates", {
    baseURL: process.env.FRONT_API,
  });

  return {
    props: {
      data,
    },
  };
};
