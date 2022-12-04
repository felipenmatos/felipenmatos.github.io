import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certificado1 from "../../icons/certificados/Certificado1.jpg";
import certificado2 from "../../icons/certificados/Certificado2.jpg";
import certificado3 from "../../icons/certificados/Certificado3.jpg";
import certificado4 from "../../icons/certificados/Certificado4.jpg";
import certificado5 from "../../icons/certificados/Certificado5.jpg";
import certificado6 from "../../icons/certificados/Certificado6.jpg";
import certificado7 from "../../icons/certificados/Certificado7.jpg";
import certificado8 from "../../icons/certificados/Certificado8.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Circle
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Circle
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Title>Cursos_</Title>
      <Slider {...settings}>
        <Img src={certificado1} alt="Certificado" />
        <Img src={certificado2} alt="Certificado" />
        <Img src={certificado3} alt="Certificado" />
        <Img src={certificado4} alt="Certificado" />
        <Img src={certificado5} alt="Certificado" />
        <Img src={certificado6} alt="Certificado" />
        <Img src={certificado7} alt="Certificado" />
        <Img src={certificado8} alt="Certificado" />
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  height: 200px;
  margin-top: 40px;
  margin-left: 20%;
`;

const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
`;

const Img = styled.img`
  width: 100%;
  height: 90vh;
`;

const Circle = styled.div`
  border-radius: 100%;
`;

export default SimpleSlider;
