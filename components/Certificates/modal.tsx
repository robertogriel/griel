import styled from "styled-components";
import { CertificateTypes } from "../../types/certificates/Certificates";

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
  transition: all 0.3s ease-out;
  &.open {
    transition: all 0.3s ease-in;
    z-index: 5;
    opacity: 1;
  }
`;

const ModalContainer = styled.div`
  background-color: white;
  justify-content: center;
  box-shadow: 5px 5px 5px rgb(0 0 0 / 80%);
  border-radius: var(--space);
  margin: 15px;
`;

const ModalBody = styled.div``;

const ModalImage = styled.img`
  border-radius: var(--space);
  width: 100%;
`;

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
`;

type ModalState = {
  name: CertificateTypes | string;
  image: CertificateTypes | string;
  state: boolean;
};

const Modal = ({ image, name, state }: ModalState) => {
  return (
    <ModalOverflow className={state ? "open" : ""}>
      <ModalContainer>
        <div className="modal-body">
          <ModalImage
            src={`/images/certificates/${image}@1x.jpg`}
            alt={`Certificado ${name}`}
          />
          <ButtonCloseModal
            className="close"
            aria-label="Fechar o Modal"
            accessKey="x"
          >
            <img src="/images/svg/modal-close.svg" alt="Fechar o Modal" />
          </ButtonCloseModal>
        </div>
      </ModalContainer>
    </ModalOverflow>
  );
};

export default Modal;
