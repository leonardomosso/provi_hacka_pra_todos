import React from "react";
import styled from "styled-components"
import location from "../assets/location.svg"
import calendar from "../assets/calendar.svg"

const Card = styled.div`
background-color: #ffffff;
display: flex;
width: 100%;
flex-direction: column;
margin-right: 20px;
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
const CardLocationContainer = styled.div`
`
const CardLocation = styled.img`
width: 20px;
height: 20px;
`

// const CardFooterContainer = styled.div`
// `
// const CardLocation = styled.img`
// `
// const CardCity = styled.span`
// `
// const CardCalendar = styled.img`
// `

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