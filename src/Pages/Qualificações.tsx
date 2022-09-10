import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import HeaderProfile from "../Components/HeaderProfile";
import Footer from "../Components/Footer";
import Title from "../Components/BodyProject/Title";
import BodyTechnology from "../Components/BodyTechnology";
import Certificado1 from "../icons/certificados/Certificado1.jpg";
import Certificado2 from "../icons/certificados/Certificado2.jpg";
import Certificado3 from "../icons/certificados/Certificado3.jpg";
import Certificado4 from "../icons/certificados/Certificado4.jpg";
import Certificado5 from "../icons/certificados/Certificado5.jpg";
import Certificado6 from "../icons/certificados/Certificado6.jpg";
import Certificado7 from "../icons/certificados/Certificado7.jpg";
import close from "../icons/icons/close.png";

const Qualificacoes = () => {
  const [certificado1, setCertificado1]: any = useState(false);
  const [certificado2, setCertificado2]: any = useState(false);
  const [certificado3, setCertificado3]: any = useState(false);
  const [certificado4, setCertificado4]: any = useState(false);
  const [certificado5, setCertificado5]: any = useState(false);
  const [certificado6, setCertificado6]: any = useState(false);
  const [certificado7, setCertificado7]: any = useState(false);

  return (
    <Container>
      <Header />
      <HeaderProfile
        title="Qualificações"
        description="Ao longo de minha trajetória até aqui, venho adquirindo aconhecimentos voltado para desenvolvimento FrontEnd com a finalidade de aprimorar e expandir cada vez mais minhas habilidades."
        label="Veja minhas qualificações"
      />
      <Title title="Minhas licenças e certificados" />
      <Row>
        <Img src={Certificado1} onClick={() => setCertificado1(true)} />
        <Img src={Certificado2} onClick={() => setCertificado2(true)} />
        <Img src={Certificado3} onClick={() => setCertificado3(true)} />
        <Img src={Certificado4} onClick={() => setCertificado4(true)} />
      </Row>
      <RowBottom>
        <Img src={Certificado5} onClick={() => setCertificado5(true)} />
        <Img src={Certificado6} onClick={() => setCertificado6(true)} />
        <Img src={Certificado7} onClick={() => setCertificado7(true)} />
      </RowBottom>
      <BodyTechnology />
      <Footer />
      <FooterPage>
        <Text>c 2022 . built with care. by Felipe Nonato </Text>
      </FooterPage>
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
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(45, 0, 108);
  background: linear-gradient(
    90deg,
    rgba(45, 0, 108, 1) 0%,
    rgba(121, 9, 117, 1) 32%,
    rgba(131, 0, 255, 1) 100%
  );
  background-size: 100%;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }
`;

const FooterPage = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-family: "Kanit", sans-serif;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const RowBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
`;

const Img = styled.img`
  width: 220px;
  height: 150px;
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
