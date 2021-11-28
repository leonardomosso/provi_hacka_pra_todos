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

`

 
const Header = () => {
    const navigate = useNavigate()
    const goToCadastro = () => {
        navigate('/cadastro')
    }
    return (
        <DivHeader>

            <DivHeaderLeft>
                <Button size="large" color={"secondary"}>Diversidade</Button>
            </DivHeaderLeft>

            <DivHeaderRigth>
                <div>
                    <Button size="large"  color={"secondary"} >Quem Somos</Button>
                    <Button size="large" color={"secondary"} >Login</Button>
                    <Button size="large" color={"secondary"} >Cadastro</Button>
                </div>
                <DivHeaderRigthSignUp>
                    <Button color={"secondary"} onClick={goToCadastro}>Cadastra-se</Button>
                </DivHeaderRigthSignUp>
            </DivHeaderRigth>
        </DivHeader>
    )
}

export default Header;