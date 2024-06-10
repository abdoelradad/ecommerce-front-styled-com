import React, { useContext, useState } from "react";
import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { CartContext } from "./CartContext";

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const StyledNav = styled.nav`
    z-index: 100;
    @media screen and (min-width: 768px) {
      display: none;
    }
  `;

  const StyleNav = styled.div`
    color: ${isOpen ? "white" : "green"};
    position: absolute;
    background-color: #222;
    top: 65px;
    right: ${isOpen ? "0" : "-100%"};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  `;

  const NavLink = styled(Link)`
    color: #aaa;
    text-decoration: none;
  `;

  const MenuBtn = styled.button`
    font-size: 2rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: #ddd;
    border-radius: 10px;
    border: 1px solid #ddd;
    cursor: pointer;
  `;
  const { cartProducts } = useContext(CartContext);
  return (
    <StyledNav>
      <MenuBtn onClick={() => setIsOpen(!isOpen)}>
        <IoMenu />
      </MenuBtn>

      <StyleNav>
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/products"}>All products</NavLink>
        <NavLink href={"/categories"}>Categories</NavLink>
        <NavLink href={"/account"}>Account</NavLink>
        <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
      </StyleNav>
    </StyledNav>
  );
}
