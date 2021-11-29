import React from "react";
import styled from 'styled-components';
import bePart from '../assets/be-part.png';
import design from '../assets/design.png';
import devMobile from '../assets/dev-mobile.png';
import findCourse from '../assets/find-course.png';
import share from '../assets/share.png';
import socialMedia from '../assets/social-media-marketing.png';
import transformYourself from '../assets/transform.png';
import womanWork from '../assets/woman-work.png';
import CardAbilities from "../CardAbilities/CardAbilities";
import CardCourse from "../CardCourse/CardCourse";
import Header from "../Header/Header";
import banner from "../assets/imgVoluntarios.svg";
import iconFormation from "../assets/iconFormation.svg";
import iconHands from "../assets/iconsHands.svg";
import iconInta from "../assets/Vector (6).svg";
import iconGit from "../assets/Vector (7).svg";
import iconTwitter from "../assets/Vector (8).svg";
import { useNavigate } from "react-router";

const GeneralContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`

const Image = styled.img`
  width: 100%;
`

const ContainerHero = styled.div`
display: flex;
align-items: flex-end;
margin-bottom: 100px;
`

const HeroText = styled.h1`
  position: absolute;
  width: 964px;
  color: #ffffff;
  margin: 0;
  margin-bottom: 22px;
  margin-left: 90px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 60px;
`


const AbilitiesDisplay = styled.div`
  display: flex;
  max-width: 1200px;
  align-items: center;
  padding: 0 200px;
  margin-bottom: 80px;
  justify-content: space-between;
  flex-wrap: wrap; 
  
  `

const CourseDisplay = styled.div`
      background-color: #f9f9f9;
      display: flex;
      max-width: 1200px;
      justify-content: space-evenly;
      padding: 0 100px;
`

const ContainerBanner = styled.div`
  height: 799.25px;
  position: relative;
  display: flex;
`
const ConatainerBannerColor = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  z-index: 2;

  gap: 70px;
  background: rgba(239, 83, 80, 0.63);
`

const StyleButton = styled.button`
  width: 684.91px;
  height: 121.13px;

  background: #FFFFFF;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 48px;
  line-height: 121.9%;
  color: #EF5350;
`

const BannerTitle = styled.p`
  width: 80%;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 38px;

  text-align: justify;

  color: #FFFFFF;`

const BannerStrong = styled.strong`
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 121.9%;
/* or 59px */


color: #FFFFFF;`

const ContainerCardsInfos = styled.div`
  width: 100%;
  height: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 150px;
  `

const CardInfor = styled.div`
    width: 450px;
    height: 263px;

    background: rgba(239, 111, 126, 0.68);
    border-radius: 20px;
    display: flex;
  `

const CardInfoP = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #FFFFFF;
    margin-left: 20px
  `
const CardInfoH1 = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-size: 36px;
  line-height: 49px;

  color: #FFFFFF;
  margin-left: 20px
  `
const ContainerFooter = styled.footer`
  display: flex;
  width: 93.6%;
  height: 1000px;
  background: #EF5350;
  justify-content: space-between;
  padding: 20px 40px;
  margin-top: 150px;
  color: #FFFFFF;
  font-family: Nunito;
`

const HomePage = () => {
  const descriptionCard = [
    {
      img: bePart,
      titulo: "Faça Parte",
      texto: "Amplie suas oportunidades com os cursos que oferecemos",
    },
    {
      img: findCourse,
      titulo: "Encontre seu curso",
      texto: "Procure o curso que você se identifca",
    },
    {
      img: transformYourself,
      titulo: "Transforme-se",
      texto: "Conhecimento é o primeiro passo para sua transformação",
    },
    {
      img: share,
      titulo: "Compartilhe",
      texto: "Com sua ajuda, mais mulheres podem ser impactadas",
    },
  ];

  const navigate = useNavigate()
  const goToCadastro = () => {
    navigate("/cadastro")
  }

  return (
    <GeneralContainer>
      <Header />
      <ContainerHero>
        <HeroText>Mulheres engajadas conectadas ao conhecimento</HeroText>
        <Image src={womanWork} alt="Mulheres Engajadas" />
      </ContainerHero>


      <AbilitiesDisplay>
        {
          descriptionCard.map(card => (
            <CardAbilities img={card.img} titulo={card.titulo} texto={card.texto} />
          ))
        }

      </AbilitiesDisplay>
      <CourseDisplay>
        <CardCourse
          img={socialMedia}
          titulo={"Marketing Digital"}
          texto={"Se você é criativo, ligado em tecnologia e artes visuais venha fazer parte da construção do nosso website."}

        />
        <CardCourse
          img={devMobile}
          titulo={"Desenvolvimento Web"}
          texto={"Se você é criativo, ligado em tecnologia e artes visuais venha fazer parte da construção do nosso website."}
        />
        <CardCourse
          img={design}
          titulo={"Web Design"}
          texto={"Se você é criativo, ligado em tecnologia e artes visuais venha fazer parte da construção do nosso website."}
        />

      </CourseDisplay>

      <ContainerBanner>
        <Image src={banner} alt="Mulheres Engajadas" />
        <ConatainerBannerColor>
          <BannerStrong>
            Bem vinde ao Mulheres Engajadas!
          </BannerStrong>
          <BannerTitle>
            Nosso intuito é conectar mulheres de baixa renda a pessoas voluntárias através do conhecimento, ofertando cursos, palestras, conteúdos diversos principalmente tecnológicos
          </BannerTitle>

          <StyleButton onClick={goToCadastro}>Junte-se ao nosso time</StyleButton>
        </ConatainerBannerColor>
      </ContainerBanner>
      <ContainerCardsInfos>
        <CardInfor>
          <img src={iconFormation} alt="icone" />
          <div>
            <CardInfoH1>Pontos de apoio</CardInfoH1>
            <CardInfoP>Ajude-nos a estruturar esta ideia com pouco fazermos muito</CardInfoP>
          </div>
        </CardInfor>

        <CardInfor>
          <img src={iconHands} alt="icone" />
          <div>

            <CardInfoH1>Seja um voluntário</CardInfoH1>
            <CardInfoP>Nos ajude com o seu conhecimento. Juntos podemos fazer a diferença.</CardInfoP>
          </div>
        </CardInfor>
      </ContainerCardsInfos>

      <ContainerFooter>
        <h1>Mulheres Engajadas</h1>
        <div>
          <img src={iconInta} alt="icone insta" />
          <img src={iconGit} alt="icone git" />
          <img src={iconTwitter} alt="icone twitter" />
        </div>
      </ContainerFooter>
    </GeneralContainer>
  )
}

export default HomePage;