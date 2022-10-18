import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function HeaderProfile() {
  const navigate = useNavigate();

  function click() {
    navigate("/Sobre");
  }

  return (
    <Container>
      <Name>FELIPE</Name>
      <Surname>NONATO</Surname>
      <Description>
        Desenvolvo sites e aplicativos a mais de 2 anos. Posso te ajudar a criar
        o melhor app da sua empresa. Para mais informações, clique no botão logo
        abaixo.
      </Description>
      <Button onClick={() => click()}>SABER MAIS</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  height: 500px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #7742e7;
  animation: go-back 2s;

  @keyframes go-back {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const Surname = styled.p`
  margin-top: -40px;
  width: 213px;
  height: 60px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  background: #7742e7;
  border-radius: 10px;

  animation: go-back 1s;

  @keyframes go-back {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const Description = styled.p`
  margin-top: -10px;
  width: 345px;
  height: 91px;

  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;

  color: #4a4a4a;
`;

const Button = styled.button`
  width: 151px;
  height: 46px;

  background: #e3386a;
  border-radius: 10px;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
  border: none;
  cursor: pointer;

  :hover {
    width: 151px;
    height: 46px;

    background: #e51b56;
    border-radius: 10px;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
    border: none;
    cursor: pointer;
  }
`;

export default HeaderProfile;
