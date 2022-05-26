import React from 'react'
import Grid from '../components/card/Grid'
import styled from 'styled-components'


interface ShopProps {

}

export const Shop: React.FC<ShopProps> = ({}) => {
    return (
        <ShopWrapper>
            <Grid />
        </ShopWrapper>
    );
}

export default Shop;

const ShopWrapper = styled.div`
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2em;
`