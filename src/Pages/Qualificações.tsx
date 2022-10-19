import React, { useState } from "react";
import styled from "styled-components";
import HeaderPage from "../Components/Header/Header";
import BodyTechnology from "../Components/BodyTechnology";
import background from "../../src/icons/Background.jpg";
import backgroundMobile from "../../src/icons/Background-Mobile.jpg";
import Certificado1 from "../icons/certificados/Certificado1.jpg";
import Certificado2 from "../icons/certificados/Certificado2.jpg";
import Certificado3 from "../icons/certificados/Certificado3.jpg";
import Certificado4 from "../icons/certificados/Certificado4.jpg";
import Certificado5 from "../icons/certificados/Certificado5.jpg";
import Certificado6 from "../icons/certificados/Certificado6.jpg";
import Certificado7 from "../icons/certificados/Certificado7.jpg";
import Certificado8 from "../icons/certificados/Certificado8.jpg";
import close from "../icons/icons/close.png";

const Qualificacoes = () => {
  const [certificado1, setCertificado1]: any = useState(false);
  const [certificado2, setCertificado2]: any = useState(false);
  const [certificado3, setCertificado3]: any = useState(false);
  const [certificado4, setCertificado4]: any = useState(false);
  const [certificado5, setCertificado5]: any = useState(false);
  const [certificado6, setCertificado6]: any = useState(false);
  const [certificado7, setCertificado7]: any = useState(false);
  const [certificado8, setCertificado8]: any = useState(false);

  return (
    <Container>
      <ContainerBody>
        <HeaderPage />
        <Title>Qualificações</Title>
        <ContainerCertificados>
          <Img src={Certificado1} onClick={() => setCertificado1(true)} />
          <Img src={Certificado2} onClick={() => setCertificado2(true)} />
          <Img src={Certificado3} onClick={() => setCertificado3(true)} />
          <Img src={Certificado4} onClick={() => setCertificado4(true)} />
          <Img src={Certificado5} onClick={() => setCertificado5(true)} />
          <Img src={Certificado6} onClick={() => setCertificado6(true)} />
          <Img src={Certificado7} onClick={() => setCertificado7(true)} />
          <Img src={Certificado8} onClick={() => setCertificado8(true)} />
        </ContainerCertificados>
        <BodyTechnology />
        {certificado1 && (
          <Paper>
            <Close src={close} onClick={() => setCertificado1(false)} />
            <Modal src={Certificado1} />
          </Paper>
        )}
        {certificado2 && (
          <Paper>
            <Close src={close} onClick={() => setCertificado2(false)} />
            <Modal src={Certificado2} />
          </Paper>
        )}
        {certificado3 && (
          <Paper>
            <Close src={close} onClick={() => setCertificado3(false)} />
            <Modal src={Certificado3} />
          </Paper>
        )}
        {certificado4 && (
          <Paper>
            <Close src={close} onClick={() => setCertificado4(false)} />
            <Modal src={Certificado4} />
          </Paper>
        )}
        {certificado5 && (
          <Paper>
            <Close src={close} onClick={() => setCertificado5(false)} />
            <Modal src={Certificado5} />
          </Paper>
        )}
        {certificado6 && (
          <Paper>
            <Close src={close} onClick={() => setCertificado6(false)} />
            <Modal src={Certificado6} />
          </Paper>
        )}
        {certificado7 && (
          <Paper>
            <Close src={close} onClick={() => setCertificado7(false)} />
            <Modal src={Certificado7} />
          </Paper>
        )}
        {certificado8 && (
          <Paper>
            <Close src={close} onClick={() => setCertificado8(false)} />
            <Modal src={Certificado8} />
          </Paper>
        )}
      </ContainerBody>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  background-size: 100% 100%;
  backgound-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    background-image: url(${backgroundMobile});
    background-size: 100% 100%;
    backgound-repeat: no-repeat;
  }
`;

const ContainerBody = styled.div`
  width: 60%;
  height: 100vh;
  margin-left: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  margin-top: 20px;
  margin-left: -40%;
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
`;

const ContainerCertificados = styled.div`
  width: 80%;
  height: 280px;
  margin-top: -20px;
  margin-left: 20px;
  background: #ffffff;
  border-radius: 10px;

  display: grid;
  grid-template-columns: repeat(4, 170px);
  grid-gap: 5px;
  padding: 20px;
`;

const Img = styled.img`
  width: 160px;
  height: 120px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100px;
    height: 50%;
    cursor: pointer;
  }
`;

const Paper = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.img`
  width: 550px;
  height: 400px;

  @media (max-width: 768px) {
    width: 380px;
    height: 280px;
  }
`;

const Close = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-top: -1%;
  margin-left: 80%;
  margin-bottom: 5%;
  position: relative;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export default Qualificacoes;
