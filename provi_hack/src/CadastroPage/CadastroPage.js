import React from 'react';
import { useNavigate } from 'react-router';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Header from '../Header/Header';

const MainContainer = styled.div`
    display: flex; 
    justify-content: center;
   

`

const InputsContainer = styled.div`
    width: 50vw;
    display:flex;
    flex-direction: column;
    margin-top: 10px; 
    gap: 10px;
`


const CadastroPage = () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }
    return (
        <div>
            <Header/>
            <button onClick={goToHome}>Back</button>
            <MainContainer>
                <InputsContainer>
                    <TextField borderColor="primary" id="outlined-basic" label="Nome" variant="outlined" />
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                    <TextField id="outlined-basic" label="CEP" variant="outlined" type="number"/>
                    <TextField id="outlined-basic" label="Logradouro" variant="outlined" />
                    <TextField id="outlined-basic" label="Número" variant="outlined" />
                    <TextField id="outlined-basic" label="Bairro" variant="outlined" />
                    <TextField id="outlined-basic" label="Cidade" variant="outlined" />
                    <TextField id="outlined-basic" label="UF" variant="outlined" /> 
                </InputsContainer>
            </MainContainer>
        </div>
    )



}

export default CadastroPage;