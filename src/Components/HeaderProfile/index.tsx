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

  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    margin-left: -40%;
  }
`;

const Name = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #0d00a5;
  animation: go-back 2s;

  @keyframes go-back {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 58px;
    color: #ffffff;
    animation: go-back 2s;
    margin-left: 15%;
  }
`;

const Surname = styled.p`
  margin-top: -40px;
  width: 213px;
  height: 60px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  background: #0d00a5;
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

  @media (max-width: 768px) {
    margin-top: -40px;
    margin-left: 15%;
    width: 213px;
    height: 60px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #0d00a5;
    background: #ffffff;
    border-radius: 10px;

    animation: go-back 1s;
  }
`;

const Description = styled.p`
  margin-top: -10px;
  width: 345px;
  height: 91px;

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;

  color: #4a4a4a;

  @media (max-width: 768px) {
    margin-top: -10px;
    margin-left: 15%;
    width: 345px;
    height: 91px;

    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;

    color: #ffffff;
  }
`;

const Button = styled.button`
  width: 151px;
  height: 46px;

  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #0d00a5;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  transition: background 1s;

  color: #0d00a5;
  cursor: pointer;

  :hover,
  :focus {
    width: 151px;
    height: 46px;

    background: #0d00a5;
    border-radius: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 151px;
    height: 46px;
    margin-left: 15%;
    background: #0d00a5;
    border-radius: 10px;
    border: 1px solid #ffffff;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    transition: background 1s;

    color: #ffffff;
    cursor: pointer;

    :hover,
    :focus {
      width: 151px;
      height: 46px;

      background: #ffffff;
      border-radius: 10px;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      color: #0d00a5;
      border: none;
      cursor: pointer;
    }
  }
`;

export default HeaderProfile;
