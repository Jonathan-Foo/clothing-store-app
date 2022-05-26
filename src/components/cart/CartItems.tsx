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
                    <Button>+</Button>
                    <Value>1</Value>
                    <Button>-</Button>
                </Quantity>
            </Info>
            
        </ItemWrapper>
    );
}

export default CartItems;

const ItemWrapper = styled.div`
    display: flex;
    

`

const Image = styled.img`
    width:50%;
    height:100%;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: .2em;

`

const Name = styled.p`
`

const Amount = styled.p`
`

const Quantity = styled.div`
    display: flex;
    gap: .5em;
`
const Value = styled.p`
`

const Button = styled.button`
    apperance: none;
    border: none;
    font-size: 1em;
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