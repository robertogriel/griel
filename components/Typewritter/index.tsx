import { useEffect, useRef } from "react";
import styled from "styled-components";
import Typed from 'typed.js';


const Writer = styled.span`
    font-size: 6vw;
    font-family: 'FiraCode';
    color: var(--blue-2);
    &::before {
        content: '>';
        color: var(--green);
        font-weight: 200;
        position: relative;
        top: -2px;
        margin-right: 5px;
    }
    @media (min-width: 768px) {
        font-size: 30px;
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
                'Mobile React Native',
                'Front End NextJS',
                'Back End PHP',
                'MySQL Database Developer',
                'Front End HTML5/CSS3',
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
        <div style={{height: '100px'}}>
            <Writer ref={el} />
        </div>
        </>
    )
}