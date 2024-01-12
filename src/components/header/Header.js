import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";



const MyHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #dfc24d;
    height: 20vh;
`
const Navbar = styled(Link)`
    text-decoration: none;
    margin: 0 20px;
    color: #fff;
    transition: .5s;
    &:hover{
        color: #dfc24d;
    }
`
const LogoImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%
`

function Header () {

    return(
    <MyHeader>
        <div>
            <LogoImage src={logo} alt="logo-restaurant"/>
        </div>
        <nav>
            <Navbar to="/">Menus</Navbar>
            <Navbar to="burger">Burgers</Navbar>
            <Navbar to="snack">Snacks</Navbar>
            <Navbar to="salade">Salades</Navbar>
            <Navbar to="boisson">Boissons</Navbar>
            <Navbar to="dessert">Desserts</Navbar>
        </nav>
    </MyHeader>
    )
}

export default Header