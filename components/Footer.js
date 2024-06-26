import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Center from "./Center";
import styled from "styled-components";

const FooterBg = styled.div`
  background-color: #222;
  margin-top: 100px;
`;
const FooterHeader = styled.div`
  padding: 30px 0;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 1rem;
    color: #aaa;
  }
`;
const SocialGroup = styled.div`
  display: flex;
  gap: 2rem;
  a {
    font-size: 1.2rem;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColParent = styled.div`
  color: #aaa;
  h3 {
    margin-bottom: 15px;
  }
  p {
    line-height: 2;
    font-size: 16px;
  }
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;
`;

const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FF = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 2rem 0;
  font-size: 16px;
  color:  #aaa;
  background-color: #242424;

`;

export default function Footer() {
  return (
    <FooterBg>
      <Center>
        <FooterHeader>
          <p>Get connected with us on social networks:</p>
          <SocialGroup>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#1877f2"
                  d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                />
                <path
                  fill="#fff"
                  d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.23em"
                height="1em"
                viewBox="0 0 256 209"
              >
                <path
                  fill="#55acee"
                  d="M256 25.45a105 105 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.2 105.2 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.3 52.3 0 0 1-23.79-6.57q-.004.33-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.6 52.6 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435q0-3.417-.152-6.795A106.8 106.8 0 0 0 256 25.45"
                />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <defs>
                  <radialGradient
                    id="logosMessenger0"
                    cx="19.247%"
                    cy="99.465%"
                    r="108.96%"
                    fx="19.247%"
                    fy="99.465%"
                  >
                    <stop offset="0%" stop-color="#09f" />
                    <stop offset="60.975%" stop-color="#a033ff" />
                    <stop offset="93.482%" stop-color="#ff5280" />
                    <stop offset="100%" stop-color="#ff7061" />
                  </radialGradient>
                </defs>
                <path
                  fill="url(#logosMessenger0)"
                  d="M128 0C55.894 0 0 52.818 0 124.16c0 37.317 15.293 69.562 40.2 91.835c2.09 1.871 3.352 4.493 3.438 7.298l.697 22.77c.223 7.262 7.724 11.988 14.37 9.054L84.111 243.9a10.22 10.22 0 0 1 6.837-.501c11.675 3.21 24.1 4.92 37.052 4.92c72.106 0 128-52.818 128-124.16S200.106 0 128 0"
                />
                <path
                  fill="#fff"
                  d="m51.137 160.47l37.6-59.653c5.98-9.49 18.788-11.853 27.762-5.123l29.905 22.43a7.68 7.68 0 0 0 9.252-.027l40.388-30.652c5.39-4.091 12.428 2.36 8.82 8.085l-37.6 59.654c-5.981 9.489-18.79 11.852-27.763 5.122l-29.906-22.43a7.68 7.68 0 0 0-9.25.027l-40.39 30.652c-5.39 4.09-12.427-2.36-8.818-8.085"
                />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 258"
              >
                <defs>
                  <linearGradient
                    id="logosWhatsappIcon0"
                    x1="50%"
                    x2="50%"
                    y1="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#1faf38" />
                    <stop offset="100%" stop-color="#60d669" />
                  </linearGradient>
                  <linearGradient
                    id="logosWhatsappIcon1"
                    x1="50%"
                    x2="50%"
                    y1="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#f9f9f9" />
                    <stop offset="100%" stop-color="#fff" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#logosWhatsappIcon0)"
                  d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                />
                <path
                  fill="url(#logosWhatsappIcon1)"
                  d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
                />
                <path
                  fill="#fff"
                  d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                />
              </svg>
            </a>
          </SocialGroup>
        </FooterHeader>

        <Main>
          {/* col */}
          <ColParent>
            <h3>Company name </h3>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </ColParent>
          {/* col */}
          <ColParent>
            <h3>Products</h3>
            <Links>
              <li>Mobiles</li>
              <li>Laptops</li>
              <li>Iphones</li>
              <li>Headphones</li>
            </Links>
          </ColParent>
          {/* col */}
          <ColParent>
            <h3>Links</h3>
            <Links>
              <li>Home</li>
              <li>Products</li>
              <li>Categories</li>
              <li>Cart</li>
            </Links>
          </ColParent>
          {/* col */}
          <ColParent>
            <h3>Contact</h3>
            <Social>
              <SocialRow>
                <GoHomeFill />
                <p>New York, US</p>
              </SocialRow>
              <SocialRow>
                <MdEmail />
                <p> info@example.com </p>
              </SocialRow>
              <SocialRow>
                <FaPhoneAlt />
                <p> + 01 234 567 88 </p>
              </SocialRow>
            </Social>
          </ColParent>
        </Main>

      </Center>
        <FF>
          <p>© 2021 Copyright: MDBootstrap.com</p>
        </FF>
    </FooterBg>
  );
}
