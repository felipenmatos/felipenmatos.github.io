import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import HeaderProfile from "../Components/HeaderProfile";
import Footer from "../Components/Footer";
import Title from "../Components/BodyProject/Title";
import CardProject from "../Components/BodyProject/Card";

const Projetos = () => {
  return (
    <Container>
      <Header />
      <HeaderProfile
        title="Projetos"
        description="A maioria dos meus orjetos foram desenvolvidos de forma a consolidar conhecimentos práticos sobre determinada linguagem, tecnologia ou até mesmo novas funcionalidades. Acredito que a prática é o melhor aliado para quem é desenvolvedor."
        label="Veja minhas qualificações"
      />
      <Title title="Meus Repositórios" />
      <CardProject
        title="Projeto Origamid"
        description="O projeto trata sobre desenvolvimento completo de um website responsivel de forma a conhecer mais como os componentes devem se comportar nas telas e seus respectivos tamanhos. Saiba mais clicando no botão para verificar meus códigos."
        textButton="Abrir Repositório"
        link="https://github.com/felipenmatos/projeto-origamid"
      />
      <CardProject
        title="Conversor de Moedas"
        description="Brincando um pouco com o JavaScript, resolvi desenvolver um conversor de moedas com base em conhecimentos externos. Saiba mais clicando no botão para verificar meus códigos."
        textButton="Abrir Repositório"
        link="https://github.com/felipenmatos/atividade3-curso-react"
      />
      <CardProject
        title="Gerenciador de Tarefas"
        description="este projeto desenvolvi um gerenciador de tarefas utilizando React, no qual tem a funcionalidade de cadastrar, consultar, deletar e ordenar tarefas. Saiba mais clicando no botão para verificar meus códigos."
        textButton="Abrir Repositório"
        link="https://github.com/felipenmatos/atividade4-curso-react"
      />
      <CardProject
        title="Modelo básico de Website para Fotógrafos"
        description="Aqui consta um modelo básico de site voltado para fotógrafos com . Saiba mais clicando no botão para verificar meus códigos."
        textButton="Abrir Repositório"
        link="https://github.com/felipenmatos/website_fotografo"
      />
      <CardProject
        title="Site Space"
        description="Neste projeto desenvolvi um site com tema viagem ao espaço, utilizando React, Typescript, styled-components e Hooks."
        textButton="Abrir Repositório"
        link="https://github.com/felipenmatos/site-space"
      />
      <CardProject
        title="Sistema de Barbearia"
        description="O sistema consiste em um modelo de gerenciador de funcionarios e agendamento de clientes. O projeto foi desenvolvido utilizando React, Context, styled-components, Hooks."
        textButton="Abrir Repositório"
        link="https://github.com/felipenmatos/clickbeard_felipe"
      />
      <CardProject
        title="Consulta Repos"
        description="Trata-se de um site simples de consulta de repositórios no qual pude integrar com a Api disponível do Github"
        textButton="Abrir Repositório"
        link="https://github.com/felipenmatos/consult-repo"
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

export default Projetos;
