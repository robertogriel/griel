import styled from 'styled-components';
import Typewritter from './typewriter';


const AboutTag = styled.section`
    flex-direction: column;
    position: absolute;
    bottom: 0;
    height: 50vh;
    justify-content: flex-end;
    padding: 20px;
`

const Header = styled.header`
    padding: 10px 0;
    justify-content: center;
    > h1 {
        font-size: 2.5rem;
        color: var(--white);
        font-weight: 600;
        width: 100%;
        justify-content: center;
    }
`

const Text = styled.div`
    flex-direction: column;
    p {
        color: var(--white);
        font-size: 1.2em;
    }
`

const Image = styled.div`
    align-items: center;
    margin-right: 20px;
    > picture {
        source, img {
            width: auto;
            height: 190px;
        }
    }
`

export default function About() {
    return (
        <AboutTag>
            <Header>
                <Typewritter />
            </Header>
            <div className="detail">
                <Image>
                    <picture>
                        <source srcSet="images/roberto-griel-filho.webp" type="image/webp" />
                        <img loading="lazy" src="images/roberto-griel-filho.png" alt="Roberto Griel Filho" />
                    </picture>
                </Image>
                <Text>
                    <p>Sou natural de Limeira, São Paulo e moro há mais de 10 anos em Nova Serrana, Minas Gerais.</p>
                    <p>Sempre fui apaixonado por tecnologia, desenvolvimento e por essa mágica de transformar linhas de código em aplicações incríveis.</p>
                </Text>
            </div>
        </AboutTag>
    )
}