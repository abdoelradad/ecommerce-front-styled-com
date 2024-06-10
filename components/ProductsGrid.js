import React from "react";
import styled from "styled-components";
import ProductBox from "./ProductBox";

const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  gap: 30px;
`;

export default function ProductsGrid({ products }) {
  return (
    <StyledProductGrid>
      {products?.length > 0 &&
        products.map((product, index) => (
          <ProductBox key={index} {...product} />
        ))}
    </StyledProductGrid>
  );
}
