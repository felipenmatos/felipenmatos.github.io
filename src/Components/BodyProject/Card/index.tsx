import React from "react";
import styled from "styled-components";

type CardProjectType = {
  title: string;
  description: string;
  textButton: string;
  link: string;
};

function CardProject({
  title,
  description,
  textButton,
  link,
}: CardProjectType) {
  return (
    <Container>
      <Title>{title}</Title>
      <RowDescription>
        <Description>{description}</Description>
        <Button href={link}>{textButton}</Button>
      </RowDescription>
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  margin-top: 15px;
  border-radius: 5px;
  padding: 8px;
  box-shadow: 10px 5px 5px rgb(36, 36, 36);

  @media (max-width: 768px) {
    width: 400px;
    height: 320px;
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;

const RowDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid gray;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const Description = styled.p`
  width: 70%;
  color: #ffffff;
  font-size: 16px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.a`
  width: 150px;
  height: 40px;
  margin-top: 30px;
  margin-left: -80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: #e3386a;
  color: #fff;
  border: 0px;
  border-radius: 2px;
  cursor: pointer;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export default CardProject;
