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
import vue from "../../icons/tec/vue.svg";
import next from "../../icons/tec/nextjs.svg";

function BodyTechnology() {
  return (
    <Container>
      <Img src={imgJavascript} />
      <Img src={imgReact} />
      <Img src={html} />
      <Img src={css} />
      <Img src={typescript} />
      <Img src={git} />
      <Img src={nodejs} />
      <Img src={sass} />
      <Img src={vue} />
      <Img src={next} />
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  height: 60px;
  display: grid;
  margin-top: 40px;
  margin-left: 10%;
  grid-template-columns: repeat(10, 55px);
  grid-gap: 14px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: -40px;
    margin-left: -40%;
    grid-template-columns: repeat(10, 25px);
    grid-gap: 14px;
    align-items: center;
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: all 0.5s;
  border: 5px solid transparent;

  :hover {
    border: 5px solid #136497;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
`;

export default BodyTechnology;
