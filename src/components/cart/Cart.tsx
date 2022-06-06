import React from 'react'
import CartItem from './CartItems'
import { IoClose } from 'react-icons/io5'
import styled, {css} from 'styled-components'
import { Product, Cart as CartTyp } from '../../hook/product'


interface CartProps {
    open: boolean;
    closeCart: () => void;
    total: number;
    cart: CartTyp;
    handleIncrement: (id: string) => void;
    handleDecrement: (id: string) => void;

}

interface StyleProps {
    open: boolean;
}

export const Cart: React.FC<CartProps> = ({ open, closeCart, total, cart, handleIncrement, handleDecrement }) => {
    
    const inCartItems = cart.map(item => {
        return <CartItem key={item.id} payload={item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
    })

    return (
        <CartWrapper>
            <Overlay open={open} onClick={closeCart}></Overlay>
            <CartPanel open={open}>
                <IconWrapper onClick={closeCart}><IoClose/></IconWrapper>
                <CartTitle>Cart</CartTitle>
                {inCartItems}
                <p>Total: ${total}</p>
                <CheckoutBtn>CHECKOUT</CheckoutBtn>
            </CartPanel>
        </CartWrapper>
    );
}

export default Cart;

const CartTitle = styled.p`
    
`


const IconWrapper = styled.div`
    align-self: flex-end;
    margin-bottom: -.5em;
    margin-top: -.5em;
    &:hover{
        color: ${({theme}) => theme.color.mainBlue};
    }

`

const CartWrapper = styled.div`

`
const CartPanel = styled.div<StyleProps>`
    position: fixed;
    top: 0;
    right: -1000px;
    padding: 1em;
    background-color: hsl(0, 0%, 100%);
    bottom: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: .5em;
    width: 600px;
    overflow: auto;
    transition: right 0.85s ease-in-out;

    &::-webkit-scrollbar {
        display: none;
    }


    ${({ open }) =>
    open &&
    css`
      right: 0;
    `}


    @media (max-width: 750px) {
        width: 430px;
    }

`

const Overlay = styled.div<StyleProps>`
    position: fixed;
    left: -100%;
    background-color rgba(0, 0, 0, 0.8);
    height: 100%;
    width: 100%;
    z-index: 1;
    transition: left 0.85s ease-in-out;

    ${({ open }) =>
    open &&
    css`
      left: 0;
    `}
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