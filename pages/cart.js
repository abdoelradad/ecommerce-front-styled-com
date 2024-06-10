import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Table from "@/components/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: fit-content;
`;

const Button = styled.button`
  margin-top: 10px;
  background-color: #2c2c2c;
  padding: 10px;
  border: none;
  color: #fff;
  font-weight: 700;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
`;
const Ctd = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 10px;
`;
const ButtonSm = styled.button`
  font-weight: 100;
  background-color: #eee;
  border: none;
  outline: none;
  padding: 2px;
  width: 20px;
  height: 20px;
  border-radius: 10px;

  cursor: pointer;
`;

const Input = styled.input`
  padding: 10px;
  outline: none;
  border: 1px solid #eee;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Td = styled.td`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  color: orange;
  margin-bottom: 5px;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [streetAddress, setStreetAdress] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfthis(id) {
    removeProduct(id);
  }

  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalcode,
      streetAddress,
      country,
      cartProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  return (
    <>
      <Header />
      <Center>
        <ColumnWrapper>
          <Box>
            <Title>Your Cart</Title>
            {!cartProducts?.length && <div>Your cart is empty</div>}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <td>Product</td>
                    <td>Quantity</td>
                    <td>Price</td>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product) => (
                    <tr key={product}>
                      <td>{product.title}</td>
                      <Ctd>
                        <ButtonSm onClick={() => lessOfthis(product._id)}>
                          -
                        </ButtonSm>
                        {cartProducts.filter((id) => id === product._id).length}
                        <ButtonSm
                          onClick={() => moreOfThisProduct(product._id)}
                        >
                          +
                        </ButtonSm>
                      </Ctd>
                      <td>
                        {cartProducts.filter((id) => id === product._id)
                          .length * product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <Td>
                      <P>Total:</P>${total}
                    </Td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>

          {!!cartProducts?.length && (
            <Box>
              <Title>Order Information</Title>

              <Input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(ev) => setName(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="City"
                value={city}
                name="city"
                onChange={(ev) => setCity(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Postal Code"
                value={postalcode}
                name="postalcode"
                onChange={(ev) => setPostalCode(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Street address"
                value={streetAddress}
                name="streetAddress"
                onChange={(ev) => setStreetAdress(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Country"
                name="country"
                value={country}
                onChange={(ev) => setCountry(ev.target.value)}
              />

              <Button type="submit" onClick={goToPayment}>
                Continue to payment
              </Button>
            </Box>
          )}
        </ColumnWrapper>
      </Center>
    </>
  );
}
