import React from "react";
import styled from "styled-components"
import vector from "../assets/Vector.png"

const Card = styled.div`
   width: 400px;
`


const CardCourse = (props) => {
    console.log(props)
    return (
        <Card>
            <div>
            <img src={props.img} alt="" />
            </div>
            <div>
            <h1>{props.titulo}</h1>
            </div>
            <div>
            <p>{props.texto}</p>
            </div>
            <div>
            <img src={vector} />
            </div>
        </Card>


    )



}

export default CardCourse;