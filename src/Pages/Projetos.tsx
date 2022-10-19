import React from "react";
import styled from "styled-components";
import background from "../../src/icons/Background.jpg";
import backgroundMobile from "../../src/icons/Background-Mobile.jpg";
import sistema1 from "../icons/images/Home.jpg";
import sistema2 from "../icons/images/Project4.png";
import sistema3 from "../icons/images/Project5.png";
import sistema4 from "../icons/images/projeto.jpg";
import sistema7 from "../icons/images/projeto7.jpg";
import sistema5 from "../icons/images/projeto8.jpg";
import sistema6 from "../icons/images/projeto9.jpg";
import sistema8 from "../icons/images/HomeDestination.jpg";
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
          <Card
            photo={sistema7}
            link="https://gerenciadordetarefasfn.netlify.app/"
          />
          <Card photo={sistema2} link="https://clickbeard.netlify.app/" />
          <Card photo={sistema3} link="https://sitespace.netlify.app/" />
          <Card
            photo={sistema4}
            link="https://animaisfantasticossite.netlify.app/"
          />
          <Card
            photo={sistema5}
            link="https://github.com/felipenmatos/burger-vue"
          />
          <Card
            photo={sistema6}
            link="https://github.com/felipenmatos/internet_plans"
          />
          <Card
            photo={sistema8}
            link="https://github.com/felipenmatos/destination_search"
          />
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
  width: 60%;
  height: 100vh;
  margin-left: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  margin-top: 30px;
  margin-left: -35%;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #0d00a5;
  animation: go-back 2s;

  @keyframes go-back {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-left: -70%;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
  }
`;

const ContainerProjects = styled.div`
  width: 480px;
  height: 360px;
  margin-top: -10px;
  margin-left: 20px;
  background: #0d00a5;
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
    background: #0d00a5;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 60px;
    background-color: #ffffff;
    border-radius: 20px;
    border: 3px solid #0d00a5;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 400px;
    height: 280px;
    margin-top: -10px;
    margin-left: -45%;
    background: #0d00a5;
    border-radius: 10px;
  }
`;

const Button = styled.button`
  width: 151px;
  height: 46px;
  margin-top: 20px;
  margin-left: -40%;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #0d00a5;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  transition: background 1s;

  color: #0d00a5;
  cursor: pointer;

  :hover {
    width: 151px;
    height: 46px;

    background: #0d00a5;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 151px;
    height: 46px;
    margin-top: 10px;
    margin-left: -80%;

    border: 1px solid #ffffff;
    background: #0d00a5;
    color: #ffffff;

    :hover {
      width: 151px;
      height: 46px;

      background: #ffffff;
      border-radius: 10px;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      color: #0d00a5;
      border: none;
      cursor: pointer;
    }
  }
`;

export default Projetos;
