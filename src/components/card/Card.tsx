import React from 'react'
import styled from 'styled-components'
import product1 from '../../assets/product1.png';

interface CardProps {

}

export const Card: React.FC<CardProps> = ({}) => {
    return (
        <CardWrapper>
            <ProductImg src={product1} alt="" />
            <Name>Women's Denim Jacket</Name>
            <Price>$100</Price>
            <AddToCartBtn>Add</AddToCartBtn>
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
    width: 300px;
    // border: 1px solid ${({theme}) => theme.color.mainBlue};
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
    font-size: .9em;
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

    &:hover {
        background-color: ${({theme}) => theme.color.mainBlue};
        color: white;
    }
`
