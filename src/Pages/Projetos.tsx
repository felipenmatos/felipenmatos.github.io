import React from "react";
import styled from "styled-components";
import background from "../../src/icons/Background.jpg";
import backgroundMobile from "../../src/icons/Background-Mobile.jpg";
import HeaderPage from "../Components/Header/Header";

const Projetos = () => {
  return (
    <Container>
      <ContainerBody>
        <HeaderPage />
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
  width: 50%;
  height: 100vh;
  margin-left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Projetos;
