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
  height: 500px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #7742e7;
`;

const Text = styled.p`
  margin-top: -10px;
  width: 345px;
  height: 91px;

  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;

  color: #4a4a4a;

  @media (max-width: 768px) {
    margin-top: -10px;
    width: 345px;
    height: 91px;

    font-family: "Inter";
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 19px;

    color: #4a4a4a;
  }
`;

const Button = styled.button`
  width: 151px;
  height: 46px;
  margin-top: 220px;
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

export default BodySobre;
