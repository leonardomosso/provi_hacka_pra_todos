import React from "react";
import styled from "styled-components"


const Card = styled.div`
    display:flex;
    width: 600px;
    background-color: #EF6F7E;
    border-radius: 20px;
     
`


const CardAbilities = (props) => {
    console.log(props)
    return (
        <div>
            <Card>
                <div>
                    <img src={props.img} alt="" />
                </div>
                <div>
                    <h1>{props.titulo}</h1>
                    <p>{props.texto}</p>
                </div>
            </Card>
        </div>

    )



}

export default CardAbilities;