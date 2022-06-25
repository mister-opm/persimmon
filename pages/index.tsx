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
      <MiddleContainer>
        <WelcomeSign>Welcome to you</WelcomeSign>
        <SubTitle>We&apos;ve been waiting for you.</SubTitle>
      </MiddleContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: rgba(245, 69, 245, 50%);
  font-family: "DM Sans", sans-serif;
  justify-content: center;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const WelcomeSign = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: "DM Sans", sans-serif;
  font-size: 48px;
`;

const SubTitle = styled.span`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export default Home;
