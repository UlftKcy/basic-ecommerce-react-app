import React from "react";
import styled from "styled-components";
import { FaShoppingBasket } from "react-icons/fa";

const NavbarContainer = styled.div`
    background-color:#000;
    color:#ffff;
    width:100%;
    height:50px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const NavLink = styled.a`
    padding:6px 12px;
    &:hover{
        cursor:pointer;
    }
`
const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <NavLink>Wear</NavLink>
                <NavLink><FaShoppingBasket style={{fontSize:"1.5rem"}}/></NavLink>
            </NavbarContainer>
        </>
    )
};

export default Navbar;