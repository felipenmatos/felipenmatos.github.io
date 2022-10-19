import React from "react";
import styled from "styled-components";
import photoProfile from "../../icons/photoBlack.jpg";
import whatsapp from "../../icons/whatsapp.png";
import linkedin from "../../icons/linkedin.png";
import github from "../../icons/github-sign.png";
import instagram from "../../icons/instagram.png";
import behance from "../../icons/behance.png";

function Contact() {
  return (
    <Container>
      <Photo src={photoProfile} alt="perfil" />
      <Subtitle>Aqui estão algumas das minhas redes de contato.</Subtitle>
      <RowIcons>
        <Img src={whatsapp} />
        <Img src={linkedin} />
        <Img src={github} />
        <Img src={instagram} />
        <Img src={behance} />
      </RowIcons>
      <CellNumber>(75) 9 8241-0325</CellNumber>
      <Email>felipe.frontend@gmail.com</Email>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Photo = styled.img`
  width: 200px;
  border-radius: 100%;
  cursor: pointer;

  -webkit-transition: all 0.7s ease;
  transition: all 0.7s ease;

  :hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

const Subtitle = styled.p`
  font-family: "Inter";

  font-weight: 700;
  font-size: 20px;
  line-height: 19px;

  color: #4a4a4a;
`;

const RowIcons = styled.div`
  margin-top: 10px;
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const CellNumber = styled.p`
  margin-top: 30px;
  margin-bottom: -10px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;

  color: #4a4a4a;
`;

const Email = styled.p`
  font-family: "Roboto";

  font-weight: 400;
  font-size: 20px;
  line-height: 19px;

  color: #4a4a4a;
`;

export default Contact;
