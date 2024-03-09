/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import { CertificateModalToOpenType } from '../../types/certificates/Certificates'

const Modal = ({ certificateName, certificateImage, onClick }: CertificateModalToOpenType) => {
  return (
    <ModalOverflow className={certificateName ? 'open' : ''}>
      <ModalContainer className={certificateName ? 'open' : ''}>
        <div className="modal-body">
          <ModalImage src={`/images/certificates/${certificateImage}@1x.jpg`} alt={`Certificado ${certificateName}`} />
          <ButtonCloseModal className="close" aria-label="Fechar o Modal" accessKey="x" onClick={onClick}>
            <img src="/images/svg/modal-close.svg" alt="Fechar o Modal" />
          </ButtonCloseModal>
          <FooterModal>
            <ButtonDownloadModal href={`/images/certificates/${certificateImage}@2x.jpg`} target="_blank">
              Tamanho original
            </ButtonDownloadModal>
          </FooterModal>
        </div>
      </ModalContainer>
    </ModalOverflow>
  )
}

export default Modal

const ModalOverflow = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: -5;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 1s ease-out;
  &.open {
    transition: all 1s ease-in;
    z-index: 5;
    opacity: 1;
  }
`

const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  justify-content: center;
  box-shadow: 5px 5px 5px rgb(0 0 0 / 80%);
  border-radius: var(--space);
  margin: 15px;
  transform: scale(0);
  transition: all 1s ease-in;
  &.open {
    transition: all 1s ease-in;
    z-index: 5;
    opacity: 1;
    transform: scale(1);
  }
`

const ModalImage = styled.img`
  border-radius: var(--space);
  width: 100%;
`

const ButtonCloseModal = styled.button`
  position: absolute;
  margin: 20px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 80%);
  border: 1px solid var(--blue-2);
  border-radius: 100%;
  padding: 15px;
  box-shadow: 1px 1px 5px rgb(0 0 0 / 80%);
  outline: none;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    opacity: 0.8;
  }
`
const FooterModal = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  flex: 1;
  padding: var(--space);
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 10px 10px;
`
const ButtonDownloadModal = styled.a`
  width: 10em;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: var(--blue-5);
  border: none;
  border-radius: 5px;
`
