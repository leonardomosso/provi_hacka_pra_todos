import React from "react";
import styled from "styled-components"
import share from "../assets/share.png"

const Card = styled.div`
display: flex;
width: 100%;
flex-direction: column;
`
const CardImageContainer = styled.div`

`
const CardImage = styled.img`
width: 300px;
border-top-left-radius: 25px;
border-top-right-radius: 25px;
`
const CardTitleContainer = styled.div`
`
const CardTitle = styled.h1`
`
const CardTextContainer = styled.div`
`
const CardText = styled.p`
`


const CardCourse = (props) => {

  return (
    <Card>
      <CardImageContainer>
        <CardImage src={props.img} alt="" />
      </CardImageContainer>
      <CardTitleContainer>
        <CardTitle>{props.titulo}</CardTitle>
      </CardTitleContainer>
      <CardTextContainer>
        <CardText>{props.texto}</CardText>
      </CardTextContainer>
      <CardImageContainer>
        <CardImage src={share} />
      </CardImageContainer>
    </Card>


  )



}

export default CardCourse;