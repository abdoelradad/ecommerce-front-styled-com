/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Center from "./Center";
import Image from "next/image";

const Bg = styled.div`
  background: rgb(10, 6, 84);
  background: linear-gradient(
    90deg,
    rgba(10, 6, 84, 1) 0%,
    rgba(18, 18, 208, 1) 40%,
    rgba(0, 212, 255, 1) 100%
  );
  color: #fff;
  padding: 80px 0;
`;
const Title = styled.h1`
  font-weight: semi-bold;
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  color: #fff;
  font-size: 1rem;
  line-height: 1.5;
`;

const Wrapper = styled.div`
  display: grid;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  position: relative;
`;

const Info = styled.div`
  margin-top: 30px;
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const S = styled.p`
  display: inline;
  color: #ffc43a;
  font-weight: semi-bold;
  font-size: 3rem;
  margin-bottom: 20px;
`;

const ImgSale = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  top: 100px;
  right: 130;
  transform: rotate(10deg);
  width: 100px;
`;

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Info>
            <Title>
              <S>Pro</S> anywhere
            </Title>
            <Desc>
              Instead of going to the local malls for a shopping spree, more and
              more people are using the variety of online resources to discover
              the right products for them. From giants like Amazon to small Etsy
              stores.
            </Desc>
          </Info>
          <div>
            <StyledImg src="/welcome.png" alt="welcome" />
            <ImgSale src="/o.png" alt="" />
          </div>
        </Wrapper>
      </Center>
    </Bg>
  );
}
