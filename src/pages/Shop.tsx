import React from 'react'
import styled from 'styled-components'
import Card from '../components/card/Card'
import { Product, Cart, products} from '../hook/product'



interface ShopProps {
    handleAddToCart: (id: string) => void;
}

export const Shop: React.FC<ShopProps> = ({ handleAddToCart }) => {

    const cards = products.map(item => {
        return <Card key={item.id} payload={item} handleAddToCart={handleAddToCart}/>
    })

    return (
        <ShopWrapper>
            <GridWrapper>
                {cards}
        </GridWrapper>
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

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    padding: 1em;
    width: 80%;
    row-gap: 1em;
`

