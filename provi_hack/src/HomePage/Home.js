import React from "react";
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const GeneralContainer = styled.div`
    height: 100vh;
`
const DivHeader = styled.div`
    display: flex; 
    justify-content: space-evenly;
`
const DivDescricaos = styled.div`
    display: flex;
    height: 50%;
    background-color: yellow;
`
const DivDescrições = styled.div`
    border: solid black 1px;
    padding: 5px;
`
const HomePage = () => {
    const navigate = useNavigate()
    const goToCadastro = () =>{
        navigate('/cadastro')
    }
    return (
        <GeneralContainer>
            <DivHeader>
                <button onClick={goToCadastro}>Cadastro</button>
                <h1>
                    Diversidade Máxima
                </h1>
            </DivHeader>
            <DivDescricaos>
                <DivDescrições>
                    <h3>Missão:</h3>
                    <p>
                        Estimular o acolhimento, a arte, a geração de renda e autonomia das mulheres da comunidade por meio de oficinas de artesanato, ações e atividades que garantam o exercício da cidadania
                    </p>
                </DivDescrições>
                <DivDescrições>
                    <h3>Visão</h3>
                    <p>
                        Favorecer a intervenção social, educativa, cultural e de saúde junto às mulheres, famílias e comunidade do Morro do Sossego e seu entorno a fim de contribuir para a transformação social.
                    </p>
                </DivDescrições>
            </DivDescricaos>
        </GeneralContainer>
    )
}

export default HomePage;