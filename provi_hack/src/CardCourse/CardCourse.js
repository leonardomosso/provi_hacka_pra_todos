import React from "react";
import styled from "styled-components"
import location from "../assets/location.svg"
import calendar from "../assets/calendar.svg"

const Card = styled.div`
background-color: #ffffff;
display: flex;
width: 300px;
flex-direction: column;
margin-right: 20px;
font-family: "Nunito", sans-serif;
`
const CardImageContainer = styled.div`

`
const CardImage = styled.img`
width: 300px;
height: 200px;
border-top-left-radius: 25px;
border-top-right-radius: 25px;
`
const CardTitleContainer = styled.div`
`
const CardTitle = styled.h1`
font-size: 24px;
padding: 0 20px;
`
const CardTextContainer = styled.div`
`
const CardText = styled.p`
font-size: 16px;
padding: 0 20px;
`
const CardLocationContainer = styled.div`
`
const CardLocation = styled.img`
width: 20px;
height: 20px;
`

const CardFooterContainer = styled.div`
`
const CardCity = styled.span`
`
const CardCalendar = styled.img`
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
      {/* <CardFooterContainer>
        <CardLocation src={location} />
        <CardCity></CardCity>
        <CardCalendar src={calendar} />
      </CardFooterContainer> */}
    </Card>
  )
}

export default CardCourse;