import React from "react";
import styled from 'styled-components';

import womanWork from '../assets/woman-work.png';
import bePart from '../assets/be-part.png';
import findCourse from '../assets/find-course.png';
import transformYourself from '../assets/transform.png';
import share from '../assets/share.png';
import design from '../assets/design.png';
import socialMedia from '../assets/social-media-marketing.png';
import devMobile from '../assets/dev-mobile.png';


import Header from "../Header/Header";
import CardCourse from "../CardCourse/CardCourse";
import CardAbilities from "../CardAbilities/CardAbilities";


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
      width: 100%px;
      justify-content: space-evenly;
      padding: 0 100px;
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

        {/* <CardAbilities
          img={bePart}
          titulo={"Faça Parte"}
          texto={"Amplie suas oportunidades com os cursos que oferecemos"}

        />
        <CardAbilities
          img={findCourse}
          titulo={"Encontre seu curso"}
          texto={"Procure o curso que você se identifca"}

        />
        <CardAbilities
          img={transformYourself}
          titulo={"Transforme-se"}
          texto={"Conhecimento é o primeiro passo para sua transformação"}

        />
        <CardAbilities
          img={share}
          titulo={"Compartilhe"}
          texto={"Com sua ajuda, mais mulheres podem ser impactadas"}

        /> */}

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
    </GeneralContainer>
  )
}

export default HomePage;