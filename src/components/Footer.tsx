import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import shapes from '../assets/shapes.png';

export const Footer: React.FC = ({}) => {
    return (
        <FooterWrapper>
            <p className="copyright">Copyright © 2022 JonathanFoo</p>
            <GitLink href="https://github.com/Jonathan-Foo" target="_blank">
                <FaGithub size={22}/>
            </GitLink>
            <Shapes src={shapes} aria-hidden='true'/>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .8em;
    gap: .3em;
    width: 100%;
    padding-bottom: .5em;
    @media (max-width: 750px){
        font-size: .6em;
    }
`

const GitLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    transition: 150ms ease-in-out;

    &:hover{
        transform: scale(1.1);
        color: ${({theme}) => theme.color.mainYellow};
    }
`
const Shapes = styled.img`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;    
    z-index: -1;
`

export default Footer;