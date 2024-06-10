import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";
import ProductsGrid from "./ProductsGrid";

const Title = styled.h1`
  margin: 30px 0;
  font-weight: bold;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      {/* title */}

      <Title>New Arrivals</Title>

      <ProductsGrid products={products} />
    </Center>
  );
}
