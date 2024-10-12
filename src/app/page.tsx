import React from "react";
import { AppProps } from "next/app";
import Layout from "./layout"; // Adjust the path if needed

const Home: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default Home;
