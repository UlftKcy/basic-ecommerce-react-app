import React, { useContext } from "react";
import styled from "styled-components";
import { FaShoppingBasket } from "react-icons/fa";
import { MainContext } from "../Context";
import { useNavigate } from "react-router-dom";

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
    display:flex;
    align-items:center;
    padding:6px 12px;
    &:hover{
        cursor:pointer;
    }
`

const ItemCount = styled.span`
    color:black;
    margin-left:2px;
    margin-bottom:10px;
    border:1px solid #ffff;
    border-radius:50%;
    padding:0 6px;
    background-color:#ffff;
    font-weight:bolder;
`

const Navbar = () => {
    const navigate = useNavigate();
    const {items} = useContext(MainContext);
    return (
        <>
            <NavbarContainer>
                <NavLink onClick={()=>navigate("/")}>Wear</NavLink>
                <NavLink onClick={()=>navigate("/basket")}>
                    <FaShoppingBasket style={{ fontSize: "1.7rem" }} />
                    <ItemCount>{items.length}</ItemCount>
                </NavLink>
            </NavbarContainer>
        </>
    )
};

export default Navbar;