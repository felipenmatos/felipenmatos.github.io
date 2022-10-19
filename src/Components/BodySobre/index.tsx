import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function BodySobre() {
  const navigate = useNavigate();

  function click() {
    navigate("/Projetos");
  }

  return (
    <Container>
      <Title>Sobre Felipe</Title>
      <Text>
        Me chamo Felipe, mas pode me chamar de Felps (apelido de infância). Sou
        baiano, nascido em Nazaré, município do interior da Bahia. Tenho
        formação de especialização em Desenvolvimento de Softwares, também
        alguns cursos que complementam e consolidam novos conhecimentos. Costumo
        ser constante e criativo no que costumo fazer. Meus principais hobbies
        são: Desenhar, Assistir Filmes e Series, Jogar, Correr e Desenvolver
        Design. Sou pai do Théo e marido da Natália. Tenho uma cadelinha chamada
        Sol. Minha família é minha principal motivação e inspiração, eles são
        minha base.
      </Text>
      <Button onClick={() => click()}>PROJETOS</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  margin-left: -15%;
  height: 500px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: -20px;
    margin-left: -40%;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  margin-left: 15%;
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
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;

    animation: go-back 2s;
  }
`;

const Text = styled.p`
  margin-top: -10px;
  margin-left: 15%;
  width: 345px;
  height: 91px;

  font-family: "Inter";
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;

  color: #4a4a4a;

  @media (max-width: 768px) {
    margin-top: -15px;
    width: 345px;
    height: 91px;

    font-family: "Inter";
    font-weight: 400;
    font-size: 20px;
    line-height: 19px;

    color: #ffffff;
  }
`;

const Button = styled.button`
  width: 151px;
  height: 46px;
  margin-top: 220px;
  margin-left: 15%;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #0d00a5;
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
`;

export default BodySobre;
