import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { GrInstagram, GrTwitter, GrFacebook } from 'react-icons/gr'
import { BsYoutube } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { AiOutlinePhone } from 'react-icons/ai'
import styled from 'styled-components'

interface ContactProps {

}

export const Contact: React.FC<ContactProps> = ({}) => {
    return (
        <ContactWrapper>
            <IconWrapper>
                <GitLink href="https://github.com/Jonathan-Foo" target="_blank">
                    <FaGithub/>
                </GitLink>
                <GitLink href="https://github.com/Jonathan-Foo" target="_blank">
                    <GrInstagram/>
                </GitLink>
                <GitLink href="https://github.com/Jonathan-Foo" target="_blank">
                    <GrTwitter/>
                </GitLink>
                <GitLink href="https://github.com/Jonathan-Foo" target="_blank">
                    <GrFacebook/>
                </GitLink>
                <GitLink href="https://github.com/Jonathan-Foo" target="_blank">
                    <BsYoutube/>
                </GitLink>
            </IconWrapper>
            <Number><AiOutlinePhone/><p>212-456-7899</p></Number>
            <Address><HiLocationMarker/><p>471 Broome St, New York, NY 10013</p></Address>
        </ContactWrapper>
    );
}

export default Contact;

const ContactWrapper = styled.div`
    padding-top: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 16.5em;

    @media (max-width: 750px){
        padding-bottom: 12em;
    }
`

const IconWrapper = styled.div`
    display: flex;    
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.color.black};
    font-size: 125px;
    gap: .8em;
    margin-bottom: 1em;
    
    @media (max-width: 1050px){
        font-size: 70px;
    }

    
    @media (max-width: 750px){
        font-size: 50px;
    }

`

const GitLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    transition: 150ms ease-in-out;

    &:hover{
        transform: scale(1.05);
        color: ${({theme}) => theme.color.mainYellow};
    }
`

const Address = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5em;
    font-weight: bold;
    color: ${({theme}) => theme.color.black};
    transform: scale(1);
    transition: 150ms ease-in-out;
    text-align: center;

    &:hover{
        transform: scale(1.05);
        color: ${({theme}) => theme.color.mainYellow};
    }
    
    @media (max-width: 750px){
        font-size: .8em;
    }
   
`

const Number = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .3em;
    font-weight: bold;
    color: ${({theme}) => theme.color.black};
    margin-bottom: 1em;
    transform: scale(1);
    transition: 150ms ease-in-out;

    &:hover{
        transform: scale(1.05);
        color: ${({theme}) => theme.color.mainYellow};
    }

    @media (max-width: 750px){
        font-size: .8em;
    }
`