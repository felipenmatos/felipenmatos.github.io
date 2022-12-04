import React from "react";
import styled from "styled-components";
import whatsapp from "../../icons/whatsapp.png";
import linkedin from "../../icons/linkedin.png";
import github from "../../icons/github-sign.png";
import instagram from "../../icons/instagram.png";
import behance from "../../icons/behance.png";

function Contact() {
  return (
    <Container>
      <RowIcons>
        <Link
          href="https://wa.me/5575982410325?text=Olá%20Tudo%20bem?%20Tenho%20interesse%20em%20seus%20serviços."
          target="_blank"
        >
          <Img src={whatsapp} />
        </Link>
        <Link href="https://www.linkedin.com/in/felipe-nonato/" target="_blank">
          <Img src={linkedin} />
        </Link>
        <Link href="https://github.com/felipenmatos" target="_blank">
          <Img src={github} />
        </Link>
        <Link href="https://www.instagram.com/felipe.frontend/" target="_blank">
          <Img src={instagram} />
        </Link>
        <Link href="https://www.behance.net/felipenonato1" target="_blank">
          <Img src={behance} />
        </Link>
      </RowIcons>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: -40%;
  }
`;

const RowIcons = styled.div`
  margin-top: 10px;
  width: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Link = styled.a``;

const Img = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  -webkit-transition: all 0.7s ease;
  transition: all 0.7s ease;

  :hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export default Contact;
