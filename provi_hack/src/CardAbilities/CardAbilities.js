import React from "react";
import styled from "styled-components"


const CardContainer = styled.div`
    display:flex;
    width: 500px;
    background-color: #EF6F7E;
    border-radius: 20px;
    padding: 30px;
    margin: 20px;
    `

const CardContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  `

const CardImage = styled.img`
  width: 100px;
  height: 100px;
`

const CardInfo = styled.div`
    font-family: 'Nunito', sans-serif;
    color: #ffffff;
    `

const CardInfoText = styled.h1`
font-weight: 900;
font-size: 36px;
margin: 0;

`

const CardInfoParag = styled.p`
width: 300px;
font-size: 24px;
margin: 0;

`


const CardAbilities = ({ img, titulo, texto }) => {
  return (
    <CardContainer>
      <CardContainerImage>
        <CardImage src={img} alt={`${titulo}`} />
      </CardContainerImage>
      <CardInfo>
        <CardInfoText>{titulo}</CardInfoText>
        <CardInfoParag>{texto}</CardInfoParag>
      </CardInfo>
    </CardContainer>
  )
}

export default CardAbilities;