import React, { useState } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

function Header() {
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
        style={home ? { color: "rgb(36, 36, 36)" } : { color: "#ffffff" }}
      >
        Início
      </NavLink>
      <NavLink
        to="/Sobre"
        onClick={() => {
          setHome(false);
          setSobre(true);
          setProject(false);
          setQualifications(false);
        }}
        style={sobre ? { color: "rgb(36, 36, 36)" } : { color: "#ffffff" }}
      >
        Sobre
      </NavLink>
      <NavLink
        to="/Projetos"
        onClick={() => {
          setHome(false);
          setSobre(false);
          setProject(true);
          setQualifications(false);
        }}
        style={project ? { color: "rgb(36, 36, 36)" } : { color: "#ffffff" }}
      >
        Projetos
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
        style={
          qualifications ? { color: "rgb(36, 36, 36)" } : { color: "#ffffff" }
        }
      >
        Qualificações
      </NavLink>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-size: 20px;
  margin-left: 30px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    font-family: "Kanit", sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-left: 12px;
    color: #ffffff;
    cursor: pointer;
  }
`;

export default Header;
