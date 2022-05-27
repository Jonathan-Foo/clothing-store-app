import React from 'react'
import styled from 'styled-components'
import { IoCart } from 'react-icons/io5'
import { Link }  from 'react-router-dom'


interface NavProps {

}

export const Nav: React.FC<NavProps> = ({}) => {
    return (
        <NavbarWrapper>
            <TextLogo>ClothingStore</TextLogo>
            <NavLinksWrapper>
                <Link to='/'><li>Home</li></Link>
                <Link to='shop'><li>Shop</li></Link>
                <Link to='contact'><li>Contact</li></Link>
                <CartIcon>
                    <IoCart size={55}/>
                    <ItemQuantity>
                        <p></p>
                    </ItemQuantity>
                </CartIcon>
            </NavLinksWrapper>
        </NavbarWrapper>
    );
};


const NavbarWrapper = styled.div`
    display: flex;
    padding: 1em;
    justify-content: space-around;
    align-items: center;
    background: ${({theme}) => theme.color.mainBlue};
    color: ${({theme}) => theme.color.white};

    @media (max-width: 1150px){
      flex-direction: column;
      padding-bottom: .5em;
      gap: .2em;
    } 
`


const TextLogo = styled.p`
    position: relative;
    font-weight: bold;
    font-size: 2.5em;
    color: ${({theme}) => theme.color.white};
    text-shadow: 5px 0px 0px ${({theme}) => theme.color.shadeBlue};

    &::before {
        position: absolute;
        content: '!';
        right: -24px;
        top: -0px;
        
        color: ${({theme}) => theme.color.mainYellow};
    }


    @media (max-width: 1150px){
        font-size: 1.5em;
        margin-left: -.6em;
    } 
`


const NavLinksWrapper = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    font-weight: bold;

    li {
        transition: 150ms ease-in-out;
        text-shadow: 3px 0px 0px ${({theme}) => theme.color.shadeBlue};

        &:hover {
            transform: scale(1.1);
            color: ${({theme}) => theme.color.mainYellow};
            text-shadow: none;
        }
    }

    @media (max-width: 1150px){
        font-size: .9em;
    } 
    
`
const CartIcon = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    padding: .5em;

    p {
        font-size: .8em;
    }

    & {
        transition: 150ms ease-in-out;
        &:hover {
            transform: scale(1.1);
            color: ${({theme}) => theme.color.mainYellow};
        }
    }

    @media (max-width: 1150px){
        padding: 0;
    } 

`

const ItemQuantity = styled.div`
    width: 4px;
    text-align: right;
    position: absolute;
    right: 10px;
    @media (max-width: 1150px){
        display: none;
    } 
`

export default Nav;