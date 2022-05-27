import React from 'react'
import styled from 'styled-components'
import { Product, Cart, products} from '../../hook/product'

interface CardProps {
    payload: Product;
    handleAddToCart: (id: string) => void;
}

export const Card: React.FC<CardProps> = ({ payload, handleAddToCart }) => {
    const { name, id, src, cost} = payload;

    const addToCart = () => {
        handleAddToCart(id);
    }

    return (
        <CardWrapper>
            <ProductImg src={src} alt={name} draggable='false'/>
            <Name>{name}</Name>
            <Price>${cost}</Price>
            <AddToCartBtn onClick={addToCart}>Add</AddToCartBtn>
        </CardWrapper>
    );
}

export default Card;

const CardWrapper = styled.div`
    padding:.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 270px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #FFF;
    text-align: center;
    
`

const ProductImg = styled.img`
    width: 100%;
`
const Name = styled.p`
    font-weight: bold;
    font-size: .8em;
    margin-bottom: .2em;
`

const Price = styled.p`
    font-size: .8em;
`


const AddToCartBtn = styled.button`
    appearance: none;
    padding: .5em;
    font-family: inherit;
    border: none;
    font-size: .7em;
    border-radius: 5px;
    width: 100%;
    transition: 150ms ease-in-out;
    margin-top: .5em;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.color.mainBlue};
        color: white;
    }
`
