import React from "react";
import styled from 'styled-components';
import Header from "../Header/Header";
import tec1 from "../assets/tec1.png";
import desenvolvimetoMobile from "../assets/desenvolvimento-mobile.png";
import design from "../assets/design.png";
import volunteer1 from "../assets/volunteer1.png";
import CardCourse from "../CardCourse/CardCourse";
import CardAbilities from "../CardAbilities/CardAbilities";


const GeneralContainer = styled.div`
    height: 100vh;
`
const CourseDisplay = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const AbilitiesDisplay = styled.div`
    display: grid;
    background-color: blue;
    grid-template-columns: repeat(2, 1fr);
`


const HomePage = () => {
    return (
        <GeneralContainer>
            <Header/>
            <AbilitiesDisplay>

                <CardAbilities
                    img={volunteer1}
                    titulo={"Faça Parte"}
                    texto={"Amplie suas oportunidades com os cursos que oferecemos"}

                />
                <CardAbilities
                    img={volunteer1}
                    titulo={"Voluntário"}
                    texto={"Amplie suas oportunidades com os cursos que oferecemos"}

                />
                <CardAbilities
                    img={volunteer1}
                    titulo={"Faça Parte"}
                    texto={"Amplie suas oportunidades com os cursos que oferecemos"}

                />
                <CardAbilities
                    img={volunteer1}
                    titulo={"Faça Parte"}
                    texto={"Amplie suas oportunidades com os cursos que oferecemos"}

                />
            
            </AbilitiesDisplay>
            <CourseDisplay>
                <CardCourse 
                    img={tec1} 
                    titulo={"Marketing Digital"} 
                    texto={"Se você é criativo, ligado em tecnologia e artes visuais venha fazer parte da construção do nosso website."}
                    
                    />
                <CardCourse
                    img={desenvolvimetoMobile} 
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