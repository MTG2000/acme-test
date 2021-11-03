import { AppProps } from "next/app";
import "../styles/globals.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Navbar from "../components/Shared/Navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
