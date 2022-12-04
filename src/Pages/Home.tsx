import React from "react";
import styled from "styled-components";
import logo from "../icons/Logo.svg";
import photoHome from "../icons/PhotoHome.png";
import imgProfile from "../icons/photoBlack.jpg";
import BodyTechnology from "../Components/BodyTechnology";

const Home = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
        <Menu>
          <ButtonMenu>Home</ButtonMenu>
          <ButtonMenu>About</ButtonMenu>
          <ButtonMenu>Projects</ButtonMenu>
        </Menu>
      </Header>
      <BodyHome>
        <Column>
          <Name>Felipe</Name>
          <Surname>Nonato</Surname>
          <Description>
            Desenvolvedor Front-End com formação em desenvolvimento de software
            pela Cubos Academy. Trabalho com desenvolvimento de websites,
            aplicativos e sistemas. Tenho constante estudo e busca por novos
            aprendizados para me especializar na stack em que atuo.
          </Description>
          <ButtonStart>Saiba mais</ButtonStart>
        </Column>
        <ImgBodyHome src={photoHome} alt="photoHome" />
      </BodyHome>
      <BodyAbout>
        <ColumnAbout>
          <ImgProfile src={imgProfile} alt="imgProfile" />
          <ButtonProjects>Projetos</ButtonProjects>
        </ColumnAbout>
        <ColumnAbout>
          <Title>Sobre_</Title>
          <Description>
            Me chamo Felipe, mas pode me chamar de Felps (apelido de infância).
            Sou baiano, tenho formação de especialização em Desenvolvimento de
            Softwares, também alguns cursos que complementam e consolidam novos
            conhecimentos.
          </Description>
          <Description>
            Costumo ser constante e criativo no que costumo fazer. Meus
            principais hobbies são: Assistir filmes e series, jogar, correr e
            desenvolver designs.
          </Description>
          <Description>
            Sou pai do Théo e marido da Natália. Tenho uma cadelinha chamada
            Sol. Minha família é minha principal motivação e inspiração, eles
            são minha base.
          </Description>
        </ColumnAbout>
      </BodyAbout>
      <TitleProject>Projetos_</TitleProject>
      <BodyProjects>
        <RowProject>
          <CardProject>
            <ImgProject />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
          <CardProject>
            <ImgProject />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
        </RowProject>
        <RowProject>
          <CardProject>
            <ImgProject />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
          <CardProject>
            <ImgProject />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
        </RowProject>
        <RowProject>
          <CardProject>
            <ImgProject />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
          <CardProject>
            <ImgProject />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
        </RowProject>
      </BodyProjects>
      <BodyCourses>
        <Carrousel>
          <ImgCourse />
        </Carrousel>
      </BodyCourses>
      <BodyTech>
        <BodyTechnology />
      </BodyTech>
      <Footer>
        <Title>Entre em contato</Title>
        <DescriptionFooter>
          Precisa de um desenvolvedor front-end? Vamos trabalhar juntos!
        </DescriptionFooter>
        <RowFooter>
          <ImgProfile />
          <Email>felipenfrontend@gmail.com</Email>
          <RowButtons>
            <ButtonFooter />
            <ButtonFooter />
            <ButtonFooter />
            <ButtonFooter />
            <ButtonFooter />
          </RowButtons>
        </RowFooter>
        <TextFooter>by: Felipe Nonato</TextFooter>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #181818;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const Logo = styled.img`
  margin-left: 20px;
`;

const Menu = styled.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 20px;
`;

const ButtonMenu = styled.button`
  background: transparent;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  border: none;
  cursor: pointer;

  :hover {
    color: #6a6a6a;
  }
`;

const BodyHome = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin-left: 60px;
`;

const Name = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
`;

const Surname = styled.button`
  margin-top: -30px;
  width: 246px;
  height: 69px;
  text-items: center;
  background: #6a6a6a;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  border: none;
`;

const Description = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #909090;
`;

const ButtonStart = styled.button`
  width: 180px;
  height: 49px;
  background: #ffffff;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
  color: #6a6a6a;
  border: none;
  cursor: pointer;

  :hover {
    border: 1px solid #6a6a6a;
    background: transparent;
    color: #ffffff;
  }
`;

const ImgBodyHome = styled.img`
  width: 600px;
  height: 422px;
`;

const BodyAbout = styled.div`
  width: 100%;
  height: 760px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ColumnAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
`;

const ImgProfile = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 100%;
  cursor: pointer;
  -webkit-transition: all 0.7s ease;
  transition: all 0.7s ease;

  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const ButtonProjects = styled.button`
  width: 180px;
  height: 49px;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 70px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
  color: #6a6a6a;
  border: none;
  cursor: pointer;

  :hover {
    border: 1px solid #6a6a6a;
    background: transparent;
    color: #ffffff;
  }
`;

const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
`;

const TitleProject = styled.h1`
  margin-left: -55%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
`;

const BodyProjects = styled.div`
  width: 100%;
  height: 1200px;
`;

const RowProject = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-left: 15%;
`;

const CardProject = styled.div`
  width: 400px;
  height: 404px;
  background: #d9d9d9;
`;

const ImgProject = styled.img`
  width: 100%;
  height: 300px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const ButtonCard = styled.button`
  width: 180px;
  height: 49px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #6a6a6a;
  border: none;
  cursor: pointer;
  border-radius: 10px;

  :hover {
    border: 1px solid #6a6a6a;
    background: transparent;
    color: #6a6a6a;
  }
`;

const BodyCourses = styled.div`
  width: center;
  height: 700px;
`;

const Carrousel = styled.div``;

const ImgCourse = styled.img``;

const BodyTech = styled.div``;

const Footer = styled.div``;

const DescriptionFooter = styled.p``;

const RowFooter = styled.div``;

const Email = styled.p``;

const RowButtons = styled.div``;

const ButtonFooter = styled.button``;

const TextFooter = styled.p``;

export default Home;
