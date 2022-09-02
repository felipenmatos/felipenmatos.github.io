import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import HeaderProfile from "../Components/HeaderProfile";
import Footer from "../Components/Footer";
import Title from "../Components/BodyProject/Title";
import CardProject from "../Components/BodyProject/Card";

const Qualificacoes = () => {
  return (
    <Container>
      <Header />
      <HeaderProfile
        title="Qualificações"
        description="Ao longo de minha trajetória até aqui, venho adquirindo aconhecimentos voltado para desenvolvimento FrontEnd com a finalidade de aprimorar e expandir cada vez mais minhas habilidades."
        label="Veja minhas qualificações"
      />
      <Title title="Minhas licenças e certificados" />
      <CardProject
        title="Programação com JavaScript"
        description="Digital Innovation One"
        textButton="Abrir LinkedIn"
      />
      <CardProject
        title="
        Primeiros passos para começar a programar "
        description="Digital Innovation One"
        textButton="Abrir LinkedIn"
      />
      <CardProject
        title="Lógica de Programação"
        description="Digital Innovation One"
        textButton="Abrir LinkedIn"
      />
      <CardProject
        title="Estrutura de Dados e Algoritimos"
        description="Digital Innovation One"
        textButton="Abrir LinkedIn"
      />
      <CardProject
        title="Bootcamp Web Developer"
        description="Digital Innovation One"
        textButton="Abrir LinkedIn"
      />
      <CardProject
        title="Curso intensivo de desenvolvimento de softwares Full Stack"
        description="Cubos Academy"
        textButton="Abrir LinkedIn"
      />
      <CardProject
        title="
        JavaScript Completo ES6"
        description="Origamid"
        textButton="Abrir LinkedIn"
      />
      <CardProject
        title="Trabalhando com Componentes em React "
        description="Digital Innovation One"
        textButton="Abrir LinkedIn"
      />
      <CardProject
        title="Novo React com Hooks do Básico ao Avançado"
        description="Udemy"
        textButton="Abrir LinkedIn"
      />
      <CardProject
        title="Desenvolvimento em React Native"
        description="Rocketseat"
        textButton="Abrir LinkedIn"
      />
      <CardProject
        title="Primeiros passos com Dart"
        description="Digital Innovation One"
        textButton="Abrir LinkedIn"
      />
      <CardProject
        title="Trabalhando com variáveis e condicionais no Dart"
        description="Digital Innovation One"
        textButton="Abrir LinkedIn"
      />
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

const RowCard = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 768px) {
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export default Qualificacoes;
