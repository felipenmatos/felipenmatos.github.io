import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

function HeaderPage() {
  return (
    <Container>
      <Row>
        <NavLink to="/">
          <Text>Início</Text>
        </NavLink>
        <NavLink to="/Sobre">
          <Text>Sobre</Text>
        </NavLink>
        <NavLink to="/Projetos">
          <Text>Projetos</Text>
        </NavLink>
        <NavLink to="/Qualificacoes" activeStyle>
          <Text>Qualificações</Text>
        </NavLink>
        <NavLink to="/Contato" activeStyle>
          <Text>Contato</Text>
        </NavLink>
      </Row>
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

const Row = styled.div`
  width: 650px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(13, 0, 165, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  position: absolute;
  border-radius: 100px;

  @media (max-width: 768px) {
    width: 420px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    position: absolute;
    border-radius: 100px;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #4a4a4a;
    cursor: pointer;
  }
`;

const Text = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 15px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;

  :hover {
    color: #b5b5b5;
  }

  @media (max-width: 768px) {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #0d00a5;
    cursor: pointer;

    :hover {
      color: #362bb6;
    }
  }
`;

export default HeaderPage;
