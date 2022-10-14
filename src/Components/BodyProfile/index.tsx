import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function BodyProfile() {
  const navigate = useNavigate();

  function clickProject() {
    navigate("/Projetos");
  }

  return (
    <Container>
      <ContainerTitle>
        <TitleBody>Projetos</TitleBody>
        <TextBody>
          Ao longo do meu aprendizado desenvolvi alguns projetos para praticar
          todo o conhecimento que venho adquirindo, seja em cursos, bootcamps ou
          até mesmo fuçando códigos e desvendado curiosidades. Meus projetos são
          desenvolvidos em HTML, CSS, JAVASCRIPT, REACT, REACT NATIVE,
          TYPESCRIPT, SASS, JEST, HOOKS, STORYBOOK. Essas são minhas principais
          ferramentas.
        </TextBody>
        <Button onClick={() => clickProject()}>Saber Mais</Button>
      </ContainerTitle>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  height: 400px;
  margin-top: 50px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 300px;
    margin-bottom: 100px;
  }
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;

  @media (max-width: 768px) {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TitleBody = styled.h1`
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-size: 70px;
  color: #ffffff;
`;

const TextBody = styled.p`
  margin-top: 10px;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  color: #ffffff;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 30px;
  background: #e3386a;
  color: #fff;
  border: 0px;
  border-radius: 2px;
  cursor: pointer;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
`;

export default BodyProfile;
