import React from 'react'
import styled from 'styled-components'
import groupPhoto from '../assets/groupPhoto.png';
import { Link }  from 'react-router-dom';


interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}) => {
    return (
        <HomeWrapper>
            <StyledLink to='shop'><p>Shop Now!</p></StyledLink>
            {/* <ShopNowBtn>Shop Now!</ShopNowBtn> */}
            <Image src={groupPhoto} alt="home-page photo" draggable='false'/>
            <TextWrapper>
                <Subtext>POSITIVE LIFESTYLE BRAND</Subtext>
                <Text>Sustainable Stylish & Simple</Text>
            </TextWrapper>
        </HomeWrapper>
    );
}

export default Home;

const StyledLink  = styled(Link)`
    position: absolute;
    color: #FFF;
    font-size: 1.4em;
    background-color: ${({theme}) => theme.color.black};
    padding-inline: 1em;
    padding-block: .5em;
    border-radius: 100px;
    right: 43%;
    bottom: 15%;
    
    transform: scale(1);
    transition: 150ms ease-in-out;
    
    &:hover {
        transform: scale(1.1);
        background-color: ${({theme}) => theme.color.mainYellow};
        
    }
    
    @media (max-width: 750px){
        font-size: 1em;
        right: 30%;
        bottom: 25%;
    }
`

const HomeWrapper = styled.main`
    position: relative;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 3.5em;
    padding-top: 2em;
    padding-inline: 0;
    padding-bottom: 5em;

    @media (max-width: 1450px){
        padding-top: 1.5em;
        padding-bottom: 11em;
        text-align: center;
    }
    
`

const Image = styled.img`
    border-radius: 30px;
    width: 40%;

    @media (max-width: 1450px){
        width: 80%;
        top: 5%;
        opacity: 0.4;
        z-index: -1;
    } 

`
const TextWrapper = styled.div`
    font-size: 1.2em;
    width: 25%;
    margin-top: 1em;
    
    @media (max-width: 1450px){
        position: absolute;
        font-size: .7em;
        width: 60%;
    }
`

const Subtext = styled.p`
    color: ${({theme}) => theme.color.grey};
    @media (max-width: 1450px){
        font-size: .85em;
        color: #666;
    }
`

const Text = styled.p`
    font-size: 2.4em;
`