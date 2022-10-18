import React, { useState } from "react";
import styled from "styled-components";
import HeaderPage from "../Components/Header/Header";
import background from "../../src/icons/Background.jpg";
import backgroundMobile from "../../src/icons/Background-Mobile.jpg";
import Contact from "../Components/BodyContact/contact";

const Contato = () => {
  return (
    <Container>
      <ContainerBody>
        <HeaderPage />
        <Contact />
      </ContainerBody>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  background-size: 100% 100%;
  backgound-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    background-image: url(${backgroundMobile});
    background-size: 100% 100%;
    backgound-repeat: no-repeat;
  }
`;

const ContainerBody = styled.div`
  width: 60%;
  height: 100vh;
  margin-left: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  margin-top: 20px;
  margin-left: -25%;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #7742e7;

  animation: go-back 2s;

  @keyframes go-back {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export default Contato;
