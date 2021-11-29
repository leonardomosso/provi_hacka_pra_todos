import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const DivHeader = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 10%;
    background: #EF5350;
    font-family: Nunito;
    
`

const DivHeaderRigth = styled.div`
    display:flex;  
    gap: 20px;
    padding-right: 50px;


`


const DivHeaderLeft = styled.div`
    display:flex;  
    gap: 20px;
    padding-right: 50px;


`

const DivHeaderRigthSignUp = styled.div`
    background-color: #B53030;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Span = styled.span`
    margin-right: 20px;
    color: #FFFFFF;
`
const SpanButton = styled.span`
    color: #FFFFFF;
`

const Header = () => {
    const navigate = useNavigate()
    const goToCadastro = () => {
        navigate('/cadastro')
    }
    return (
        <DivHeader>

            <DivHeaderLeft>
                <Span>Diversidade</Span>
                {/* <Button size="large" color={"secondary"}>Diversidade</Button> */}
            </DivHeaderLeft>

            <DivHeaderRigth>
                <div>
                    <Span>Quem Somos</Span>
                    <Span>Cidade</Span>
                    <Span>Login</Span>
                    <Span>Cadastro</Span>
                    {/* <Button variant="contained"></Button>
                    <Button size="large" color={"secondary"} >Login</Button>
                    <Button size="large" color={"secondary"} >Cadastro</Button> */}
                </div>
                <DivHeaderRigthSignUp>
                    <SpanButton onClick={goToCadastro}>Cadastra-se</SpanButton>
                </DivHeaderRigthSignUp>
            </DivHeaderRigth>
        </DivHeader>
    )
}

export default Header;