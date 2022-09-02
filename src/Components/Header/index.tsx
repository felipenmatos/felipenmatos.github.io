import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Sobre">Sobre</NavLink>
      <NavLink to="/Projetos">Projetos</NavLink>
      <NavLink to="/Qualificacoes">Qualificações</NavLink>
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
    margin-left: 10px;
    color: #ffffff;
    cursor: pointer;
  }
`;

export default Header;
