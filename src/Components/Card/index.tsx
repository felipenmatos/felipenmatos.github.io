import React from "react";
import styled from "styled-components";

type Photo = {
  photo: string;
  link: string;
};

function Card({ photo, link }: Photo) {
  return (
    <Container>
      <Header>
        <Circle />
        <Circle />
        <Circle />
      </Header>
      <PhotoProfile src={photo} />
      <Button href={link}>Acessar</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 210px;
  height: 260px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
`;

const Circle = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 100%;
  margin-top: 10px;
  margin-left: 5px;
  background-color: #d9d9d9;
`;

const PhotoProfile = styled.img`
  width: 90%;
  height: 50%;
`;

const Button = styled.a`
  width: 180px;
  height: 40px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #e3386a;
  color: #fff;
  border: 0px;
  border-radius: 2px;
  cursor: pointer;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  text-decoration: none;
`;

export default Card;
