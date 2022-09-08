import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import HeaderProfile from "../Components/HeaderProfile";
import Footer from "../Components/Footer";
import BodySobre from "../Components/BodySobre";

const Sobre = () => {
  return (
    <Container>
      <Header />
      <HeaderProfile
        title="Sobre"
        description="Minhas principais habilidades no desenvolvimento FrontEnd são: HTML, CSS, JavaScript, React, React Native, Testes Unitários, Storybook, Styled Components e Integrações e Comunicação com o BackEnd."
        label="Veja meus Projetos"
      />
      <BodySobre />
      <Footer />
      <FooterPage>
        <Text>c 2022 . built with care. by Felipe Nonato </Text>
      </FooterPage>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(45, 0, 108);
  background: linear-gradient(
    90deg,
    rgba(45, 0, 108, 1) 0%,
    rgba(121, 9, 117, 1) 32%,
    rgba(131, 0, 255, 1) 100%
  );
  background-size: 100%;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }
`;

const FooterPage = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-family: "Kanit", sans-serif;
`;

export default Sobre;
