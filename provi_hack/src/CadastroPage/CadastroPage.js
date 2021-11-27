import React from 'react';
import { useNavigate } from 'react-router';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex; 
    justify-content: center;

`

const InputsContainer = styled.div`
    width: 50vw;
    display:flex;
    flex-direction: column;
    margin-top: 10px;

`

const CadastroPage = () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }
    return (
        <div>
            <button onClick={goToHome}>Back</button>
            <MainContainer>
                <InputsContainer>
                    <TextField id="outlined-basic" label="Nome" variant="outlined" />
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                </InputsContainer>
            </MainContainer>
        </div>
    )



}

export default CadastroPage;