/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`
  padding: 1rem;
  background-color: #fcfcfc;
  border-radius: 20px;
  box-shadow: 0 5px 10px #ccc;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 5px 20px #ccc;
  }
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 180px;
  }
`;

const Title = styled(Link)`
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: underline;
  color: #000;
  margin: 0;
`;

const Button = styled.button`
  margin: 20px 0;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #020202;
  color: white;
  font-weight: 600;
  text-transform: capitalize;
  font-size; 18px;
  cursor: pointer;
  `;

const ProductInfoBox = styled.div`
  margin-top: 10px;
`;

const Row = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 5px;
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const url = "/product/" + _id;
  const { addProduct } = useContext(CartContext);
  return (
    <ProductWrapper>
      <WhiteBox href={url} target="_blank">
        <div>
          <img src={images[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url} target="_blank">
          {title}
        </Title>
        <Row>
          <Price>${price}</Price>
          <Button onClick={() => addProduct(_id)}>Add to cart</Button>
        </Row>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
