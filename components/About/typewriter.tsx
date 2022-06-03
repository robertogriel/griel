import { useEffect, useRef } from "react";
import styled from "styled-components";
import Typed from 'typed.js';

const Writer = styled.span`
    font-size: 6vw;
    color: var(--white);
    @media (min-width: 500px) {
        text-shadow: 2px 2px 5px #000000;
    }
`

/**
 * @doc http://mattboldt.github.io/typed.js/docs/#htmlparser
 */

export default function Typewritter() {

    const typed = useRef<any>(null);
    const el = useRef<any>(null);

    useEffect(() => {
        const options = {
            strings: [
                'Roberto Griel Filho',
                'Front End HTML5/CSS3',
                'Front End React Developer',
                'Back End NodeJS Developer',
                'Back End PHP Developer',
            ],
            typeSpeed: 50,
            backSpeed: 50,
            startDelay: 1000,
            backDelay: 3000,
            smartBackspace: true,
            loop: true
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current?.destroy();
        }
    }, [])


    return (
        <>
            <Writer ref={el} />
        </>
    )
}