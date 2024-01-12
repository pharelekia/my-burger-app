import styled from "styled-components";

const CardSection = styled.div`
border: 1px solid rgba(223,194,77,.3);
position: relative
`
const CardImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    display: block;
    margin: auto;
`
const CardTitre = styled.h1`
    color: #dfc24d;
    margin-left: 20px;
    text-transform: uppercase;
    font-size: 1.3em;
`
const CardDescription = styled.p`
    color: #fff;
    margin-left: 20px;
    margin-top: 10px;
`
const CardButton = styled.button`
    width: 400px;
    height: 45px;
    margin-left: 20px;
    border: none;
    background-color: #dfc24d;
    border-radius: 5px;
    margin-top: 10px;
    color: #fff;
    font-size: 1em;
`
const CardPrice = styled.span`
    color: white;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 20px 0 20px 0;
    background-color: #dfc24d;
    font-weight: 500;
    padding: 15px;
`

function CardBurger ({picture, price, name, desc}) {

    return(
        <CardSection>
            <CardImage src={picture} alt="burgerImage"/>
            <CardPrice>{price} €</CardPrice>
            <CardTitre>{name}</CardTitre>
            <CardDescription>{desc}</CardDescription>
            <CardButton>Commander</CardButton>
        </CardSection>
    )
}

export default CardBurger;