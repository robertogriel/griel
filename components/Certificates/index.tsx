import styled from "styled-components"
import { CertificateTypes } from "../../types/certificates/Certificates"

const CertificateTag = styled.div`
  flex-direction: column;
  border-radius: var(--space) var(--space) 0 0;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.25);
  margin: 20px;
  max-width: 501px;
  header {
    border: 1px solid var(--blue-5);
    border-radius: var(--space) var(--space) 0 0;
    background-color: var(--blue-5);
    padding: var(--space);
    justify-content: center;
    align-items: center;
    h2 {
      margin: 0;
      color: var(--dark);
      font-size: 20px;
    }
  }
`
const CertificateImage = styled.div`
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--blue-5);
  picture {
    img, source {
      width: 100%;
      transition: all 0.5s ease-in;
      opacity: 0.9;
      &:hover {
        transition: all 0.5s ease-out;
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }
`

export default function CertificateBox({ name, image }: CertificateTypes) {

    return (
        <CertificateTag>
            <header>
                <h2>{name}</h2>
            </header>
            <CertificateImage>
                <picture>

                    <source srcSet={`/images/certificates/thumb/${image}.webp`} type="image/webp" />
                    <img loading="lazy" src={`/images/certificates/thumb/${image}.jpg`} alt={name} />

                </picture>

            </CertificateImage>
        </CertificateTag>
    )

}