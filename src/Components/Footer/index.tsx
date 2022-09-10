import React from "react";
import styled from "styled-components";
import iconLinkedIn from "../../icons/linkedin-light.svg";
import iconGithub from "../../icons/github-light.svg";

function Footer() {
  return (
    <Container>
      <Title>Contato</Title>
      <RowIcons>
        <IconLinkedIn href="https://www.linkedin.com/in/felipe-nonato-604577113/" />
        <Icon href="https://github.com/felipenmatos" />
      </RowIcons>
      <Contato>(75) 99921-8852</Contato>
      <Contato>felipenfrontend@gmail.com</Contato>
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

const IconLinkedIn = styled.a`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-image: url(${iconLinkedIn});
  background-repeat: no-repeat;
`;

const Icon = styled.a`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-image: url(${iconGithub});
  background-repeat: no-repeat;
`;

const Contato = styled.p`
  font-family: "Kanit", sans-serif;
  color: #ffffff;
  font-size: 16px;
`;

export default Footer;
