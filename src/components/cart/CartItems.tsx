import React from 'react'
import styled from 'styled-components'
import product1 from '../../assets/product1.png';

interface CartItemsProps {

}

export const CartItems: React.FC<CartItemsProps> = ({}) => {
    return (
        <ItemWrapper>
            <Image src={product1} alt="" draggable='false' />
            <Info>
                <Name>Men's Denim Jacket</Name>
                <Amount>$100</Amount>
                <Quantity>
                    <Button>-</Button>
                    <Value>1</Value>
                    <Button>+</Button>
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