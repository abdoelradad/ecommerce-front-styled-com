import Link from "next/link";

import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import NavMobile from "./NavMobile";
import { FaShoppingCart } from "react-icons/fa";
const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #eee;
  font-size: 1.5rem;
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

const Cart = styled(Link)`
position: relative;
`;
const CartIcon = styled.span`
  color: var(--primary-color);
  margin-right: 5px;
  font-size: 1.5rem;
  position: absolute;
`;

const CartLength = styled.p`
  color: #fff;
  font-weight: bold;
  position: absolute;
  left: 23px;
  top: 12px;
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>LOGO</Logo>
          <StyleNav>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <Cart href={"/cart"}>
              <CartIcon>
                <FaShoppingCart />
              </CartIcon>
              <CartLength>{cartProducts.length}</CartLength>
            </Cart>
          </StyleNav>
          <NavMobile />
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
