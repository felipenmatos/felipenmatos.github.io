import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Title>Contato</Title>
      <RowIcons>
        <Icon />
        <Icon />
      </RowIcons>
      <Contato>(75) 99921-8852</Contato>
      <Contato>notfelipe2@hotmail.com</Contato>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
  height: 300px;
  background-color: rgb(36, 36, 36);
`;

const Title = styled.h1`
  font-family: "Kanit", sans-serif;
  color: #ffffff;
  font-size: 20px;
`;

const RowIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Contato = styled.p`
  font-family: "Kanit", sans-serif;
  color: #ffffff;
  font-size: 16px;
`;

export default Footer;
