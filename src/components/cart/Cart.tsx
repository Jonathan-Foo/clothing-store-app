import React from 'react'
import CartItem from './CartItems'
import { IoClose } from 'react-icons/io5'
import styled from 'styled-components'


interface CartProps {

}

export const Cart: React.FC<CartProps> = ({}) => {
    return (
        <CartWrapper>
            <Overlay></Overlay>
            <CartPanel>
                <IoClose style={{alignSelf: 'flex-end'}}/>
                <p>Cart</p>
                <CartItem/>
                <p>Total: $100</p>
                <CheckoutBtn>CHECKOUT</CheckoutBtn>
            </CartPanel>
        </CartWrapper>
    );
}

export default Cart;


const CartWrapper = styled.div`

`
const CartPanel = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    padding: 1em;
    background-color: hsl(0, 0%, 100%);
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: .5em;
    width: 30%;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Overlay = styled.div`
    position: fixed;
    background-color rgba(0, 0, 0, 0.8);
    height: 100%;
    width: 100%;
    z-index: 1;
`

const CheckoutBtn = styled.button`
    appearance: none;
    border: none;
    font-family: inherit;
    font-weigth: bold;
    padding: .5em;
    border: none;
    font-size: 1em;
    border-radius: 10px;
    transition: 100ms ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: ${({theme}) => theme.color.mainBlue};
        color: white;
    }
`