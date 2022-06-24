import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <MainContainer>
      <Head>
        <title>Persimmon</title>
        <meta name="description" content="Persimmon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MiddleContainer>Welcome</MiddleContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(245, 69, 245, 50%);
  font-family: "DM Sans", sans-serif;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export default Home;
