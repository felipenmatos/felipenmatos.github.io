import React from "react";
import styled from "styled-components";
import imgJavascript from "../../icons/tec/javascript.svg";
import imgReact from "../../icons/tec/react.svg";
import sass from "../../icons/tec/sass.svg";
import css from "../../icons/tec/css3.svg";
import typescript from "../../icons/tec/typescript.svg";
import git from "../../icons/tec/git.svg";
import nodejs from "../../icons/tec/nodejs.svg";
import html from "../../icons/tec/html5.svg";
import dart from "../../icons/tec/dart.svg";
import flutter from "../../icons/tec/flutter.svg";

function BodyTechnology() {
  return (
    <Container>
      <Title>Tecnologias</Title>
      <Row>
        <Img src={imgJavascript} />
        <Img src={imgReact} />
        <Img src={html} />
        <Img src={css} />
        <Img src={typescript} />
        <Img src={git} />
        <Img src={nodejs} />
        <Img src={sass} />
        <Img src={dart} />
        <Img src={flutter} />
      </Row>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-size: 70px;
  color: #ffffff;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: all 0.5s;
  border: 5px solid transparent;

  :hover {
    border: 5px solid #136497;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

export default BodyTechnology;
