import React from 'react'
import styled from 'styled-components'
import { Product} from '../../hook/product'



interface CartItemsProps {
    payload: Product;
    handleIncrement: (id: string) => void;
    handleDecrement: (id: string) => void;
}

export const CartItems: React.FC<CartItemsProps> = ({ payload, handleIncrement, handleDecrement }) => {
    const { name, id, src, cost, quantity, currentCost} = payload;

    const increment = () => {
        handleIncrement(id);
    }

    const decrement = () => {
        handleDecrement(id);
    }

    return (
        <ItemWrapper>
            <Image src={src} alt={name} draggable='false' />
            <Info>
                <Name>{name}</Name>
                <Amount>${currentCost}</Amount>
                <Quantity>
                    <Button onClick={decrement}>-</Button>
                    <Value>{quantity}</Value>
                    <Button onClick={increment}>+</Button>
                </Quantity>
            </Info>
        </ItemWrapper>
    );
}

export default CartItems;

const ItemWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-inline: .5em;
    border-radius: 10px;
    gap: .2em;

    border: 1px solid #999;

    &:hover {
        border: 1px solid ${({theme}) => theme.color.mainBlue};
    }

`

const Image = styled.img`
    width:50%;
    height:100%;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: .9em;
    font-size: .9em;

`

const Name = styled.p`
`

const Amount = styled.p`
`

const Quantity = styled.div`
    display: flex;
    gap: .5em;
    margin-top: .3em;
    
`
const Value = styled.p`
`

const Button = styled.button`
    apperance: none;
    border: none;
    font-size: inherit;
    width: 1.3em;
    font-family: inherit;
    font-weigth: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: 100ms ease-in-out;

    &:hover{
        background-color: ${({theme}) => theme.color.mainBlue};
        color: white;
    }
`