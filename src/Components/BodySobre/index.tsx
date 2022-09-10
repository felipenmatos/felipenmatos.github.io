import React from "react";
import styled from "styled-components";
import photoFamily from "../../icons/images/familia.jpeg";
import { useNavigate } from "react-router-dom";

function BodySobre() {
  const navigate = useNavigate();

  function click() {
    navigate("/Projetos");
  }

  return (
    <Container>
      <Title>Sobre Felipe</Title>
      <Row>
        <PhotoFamily src={photoFamily} />
        <Text>
          Me chamo Felipe, mas pode me chamar de Lipe. Sou baiano, nascido em
          Nazaré, município do interior da Bahia. Tenho formação de
          especialização em Desenvolvimento de Softwares, também alguns cursos
          que complementam e consolidam novos conhecimentos. Costumo ser
          constante e criativo no que costumo fazer. Meus principais hobbies
          são: Desenhar, Assistir Filmes e Series, Jogar, Correr e Desenvolver
          Design. Sou pai do Théo e marido da Natália. Tenho uma cadelinha
          chamada Sol. Minha família é minha principal motivação e inspiração,
          eles são minha base.
        </Text>
      </Row>
      <Button onClick={() => click()}>Veja meus projetos</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  height: 700px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 300px;
    margin-bottom: 200px;
  }
`;

const Title = styled.h1`
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-size: 70px;
  color: #ffffff;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 100px;
  }
`;

const PhotoFamily = styled.img`
  width: 300px;
  height: 400px;
  margin-top: 20px;
  margin-left: -210px;
  transition: all 0.5s;

  :hover {
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    margin-top: 270px;
    margin-left: 5px;
`;

const Text = styled.p`
  width: 50%;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 100px;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 30px;
  margin-left: -80px;
  background-color: #b10044;
  color: #fff;
  border: 0px;
  border-radius: 2px;
  cursor: pointer;
  font-family: "Kanit", sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-left: 10px;
  }
`;

export default BodySobre;
