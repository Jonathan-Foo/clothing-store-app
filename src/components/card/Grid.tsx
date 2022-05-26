import React from 'react'
import Card from './Card'
import styled from 'styled-components'

interface GridProps {

}

export const Grid: React.FC<GridProps> = ({}) => {
    return (
        <GridWrapper>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </GridWrapper>
    );
}

export default Grid;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    padding: 1em;
    width: 80%;
    row-gap: 1em;
`

