import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  gap: 40px;
  margin-top: 40px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: bold;
`;
const WhiteBox = styled.div`
  background-color: #fff;
  padding: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
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
  font-size; 20px;
  cursor: pointer;
  `;
export default function ProductPage({ product }) {
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <Button>Add to cart</Button>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
