import React, { useState } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

function HeaderPage() {
  const [home, setHome] = useState(false);
  const [sobre, setSobre] = useState(false);
  const [project, setProject] = useState(false);
  const [qualifications, setQualifications] = useState(false);

  return (
    <Container>
      <NavLink
        onClick={() => {
          setHome(true);
          setSobre(false);
          setProject(false);
          setQualifications(false);
        }}
        to="/"
        style={home ? { color: "gray" } : { color: "#ffffff" }}
      >
        <Text>Início</Text>
      </NavLink>
      <NavLink
        to="/Sobre"
        onClick={() => {
          setHome(false);
          setSobre(true);
          setProject(false);
          setQualifications(false);
        }}
        style={sobre ? { color: "gray" } : { color: "#ffffff" }}
      >
        <Text>Sobre</Text>
      </NavLink>
      <NavLink
        to="/Projetos"
        onClick={() => {
          setHome(false);
          setSobre(false);
          setProject(true);
          setQualifications(false);
        }}
        style={project ? { color: "gray" } : { color: "#ffffff" }}
      >
        <Text>Projetos</Text>
      </NavLink>
      <NavLink
        to="/Qualificacoes"
        activeStyle
        onClick={() => {
          setHome(false);
          setSobre(false);
          setProject(false);
          setQualifications(true);
        }}
        style={qualifications ? { color: "gray" } : { color: "#ffffff" }}
      >
        <Text>Qualificações</Text>
      </NavLink>
      <NavLink
        to="/Contato"
        activeStyle
        onClick={() => {
          setHome(false);
          setSobre(false);
          setProject(false);
          setQualifications(true);
        }}
        style={qualifications ? { color: "gray" } : { color: "#ffffff" }}
      >
        <Text>Contato</Text>
      </NavLink>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    margin-left: -40%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  margin-left: 10px;
  color: red;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    font-family: "Kanit", sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-left: 12px;
    color: #4a4a4a;
    cursor: pointer;
  }
`;

const Text = styled.p`
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 15px;
  margin-left: 30px;
  color: #4a4a4a;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    font-family: "Kanit", sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-left: 10px;
    color: #ffffff;
    cursor: pointer;
  }
`;

export default HeaderPage;
