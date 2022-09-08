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
  width: 700px;
  height: 200px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;

  @media (max-width: 768px) {
    width: 400px;
    height: 350px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
  }
`;

const Title = styled.p`
  color: #ffffff;
  font-size: 20px;
`;

const RowDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Description = styled.p`
  width: 70%;
  color: #ffffff;
  font-size: 16px;
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
  background-color: #b10044;
  color: #fff;
  border: 0px;
  border-radius: 2px;
  cursor: pointer;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  text-decoration: none;
`;

export default CardProject;
