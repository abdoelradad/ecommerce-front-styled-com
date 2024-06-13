import { CartContextProvider } from "@/components/CartContext";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartContextProvider>
        <Component {...pageProps} />;
        <Footer />
      </CartContextProvider>
    </>
  );
}
