import React from "react";
import styled from "styled-components";
import imgProfile from "../../icons/images/img-perfil.png";
import arrow from "../../icons/icons/arrow.png";
import { useNavigate } from "react-router-dom";

type HeaderType = {
  title: string;
  description: string;
  label: string;
};

function HeaderProfile({ title, description, label }: HeaderType) {
  const navigate = useNavigate();

  function click() {
    navigate("/Sobre");
  }

  return (
    <Container>
      <ContainerCard>
        <div>
          <CardPhoto src={imgProfile} />
          <TitlePage>{title}</TitlePage>
        </div>
        <ContainerDescription>
          <Description>{description}</Description>
          <Label>{label}</Label>
          <Button onClick={() => click()} />
        </ContainerDescription>
      </ContainerCard>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

const ContainerCard = styled.div`
  width: 100%;
  height: 80%;
  font-family: "Kanit", sans-serif;
  background-color: rgb(36, 36, 36);
  display: flex;
  flex-direction: row;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1000px;
  }
`;

const CardPhoto = styled.img`
  display: flex;
  position: relative;
  width: 450px;
  height: 450px;
  left: 20%;
  top: 10%;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    left: 0%;
    top: 5%;
    width: 300px;
    height: 300px;
  }
`;

const TitlePage = styled.h1`
  position: relative;
  top: -26%;
  left: 75%;
  font-size: 70px;
  color: #ffffff;
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
    display: flex;
    flex-direction: column;
    margin-left: -200px;
    margin-bottom: 100px;
    font-size: 50px;
  }
`;

const ContainerDescription = styled.div`
  width: 440px;
  margin-left: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: -180px;
    margin-left: 0px;
  }
`;

const Description = styled.p`
  margin-top: 80px;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
`;

const Label = styled.p`
  color: #8a2be2;
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  margin-left: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 50px;
`;

export default HeaderProfile;
