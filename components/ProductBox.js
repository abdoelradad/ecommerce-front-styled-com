/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const ProductWrapper = styled.div`
  padding: 0.5rem;
  background-color: #fcfcfc;
  border-radius: 15px;
  box-shadow: 0 2px 3px #ccc;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 5px 5px #ccc;
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
  padding: 0 10px;
`;

const Button = styled.button`
  margin: 20px 0;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 1.5rem;
  }
  &:hover {
    background-color: var(--primary-color-hover);
  }
  transition: all 0.3s;
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
`;

const Row = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;
const notify = () =>
  toast.success("Items has been added to cart successfully!");

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
          <Button
            onClick={() => {
              addProduct(_id), notify();
            }}
          >
            <span>
              <FaShoppingCart />
            </span>
          </Button>
        </Row>
      </ProductInfoBox>
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </ProductWrapper>
  );
}
