import React from "react";
import styled from "styled-components";
import background from "../../src/icons/Background.jpg";
import backgroundMobile from "../../src/icons/Background-Mobile.jpg";
import sistema1 from "../icons/images/Home.jpg";
import HeaderPage from "../Components/Header/Header";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";

const Projetos = () => {
  const navigate = useNavigate();

  function click() {
    navigate("/Qualificacoes");
  }

  return (
    <Container>
      <ContainerBody>
        <HeaderPage />
        <Title>Projetos</Title>
        <ContainerProjects>
          <Card photo={sistema1} link="https://list-english-app.netlify.app/" />
          <Card photo={sistema1} link="https://list-english-app.netlify.app/" />
          <Card photo={sistema1} link="https://list-english-app.netlify.app/" />
          <Card photo={sistema1} link="https://list-english-app.netlify.app/" />
          <Card photo={sistema1} link="https://list-english-app.netlify.app/" />
          <Card photo={sistema1} link="https://list-english-app.netlify.app/" />
        </ContainerProjects>
        <Button onClick={() => click()}>QUALIFICAÇÕES</Button>
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

const Title = styled.h1`
  margin-top: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #7742e7;
`;

const ContainerProjects = styled.div`
  width: 480px;
  height: 360px;
  margin-top: -10px;
  margin-left: 20px;
  background: #7742e7;
  border-radius: 10px;

  display: grid;
  grid-template-columns: repeat(2, 210px);
  grid-gap: 10px;
  padding: 20px;

  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 22px;
  }
  ::-webkit-scrollbar-track {
    background: #7742e7;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 60px;
    background-color: #ffffff;
    border-radius: 20px;
    border: 3px solid #7742e7;
  }
`;

const Button = styled.button`
  width: 151px;
  height: 46px;
  margin-top: 20px;
  margin-left: -50%;
  background: #e3386a;
  border-radius: 10px;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export default Projetos;
