import React from "react";
import styled from "styled-components";

type TitleType = {
  title: string;
};

function Title({ title }: TitleType) {
  return (
    <>
      <Text>{title}</Text>
    </>
  );
}

const Text = styled.p`
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-size: 70px;
  color: #ffffff;

  @media (max-width: 768px) {
    margin-top: 150px;
    font-family: "Kanit", sans-serif;
    font-weight: 400;
    font-size: 50px;
    color: #ffffff;
  }
`;

export default Title;
