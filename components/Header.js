import Link from "next/link";

import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import NavMobile from "./NavMobile";

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #eee;
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  span {
    color: #ffc43a;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const StyleNav = styled.nav`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <span>Smart</span>mall
          </Logo>
          <StyleNav>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyleNav>
          <NavMobile />
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
