import React, { useState } from "react";
import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    display: flex;
  }
  display: none;
`;

const OpenBtn = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ddd;
  background-color: transparent;
  span {
    font-size: 1.5rem;
  }
  cursor: pointer;
`;
const Menu = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  transition: all 0.3s;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled(Link)`
  color: #ffc43a;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
`;

const StyleNav = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`;
const L = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #eee;
  font-weigth: 600;
`;
export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <OpenBtn onClick={() => setIsOpen(true)}>
        <span>
          <IoMenu />
        </span>
      </OpenBtn>

      <Menu>
        <StyleNav>
          <L href={"/"}>Home</L>
          <L href={"/products"}>All products</L>
          <L href={"/categories"}>Categories</L>
          <L href={"/account"}>Account</L>
        </StyleNav>
      </Menu>
    </Nav>
  );
}
