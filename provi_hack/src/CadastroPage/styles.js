import styled from "styled-components";
import pictureWoman from "../assets/picture.svg";

export const styles = {
     DivSection: styled.section`
        min-width: 100vw;
        height: 100vh;
        display: flex; 
        justify-content: center;
    `,
    
    CadastroContainer : styled.div`
        display: flex; 
        justify-content: center;
        width: 50%;
        height: 100%;
    `,
    
    FormContainer : styled.form`
        width: 70%;
        display:flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
    `,
    
    DivImage : styled.div`
        display: flex; 
        width: 50%;
        height: 100%;
        background: rgb(252, 26, 158);
        align-items: center;
        justify-content: center;
        background-image: url(${pictureWoman});
    
        background-repeat: no-repeat;
        background-size: cover;
    `,
    
    FormatDivision :styled.div`
        display: flex; 
        width: 80%;
        gap: 10px
    `,
    Buttons : styled.button`
        width: 50%;
        height: 43px;
        color: rgb(255, 255, 255);
        background: #EF5350;
        border: 1px solid #EF5350;
        box-sizing: border-box;
        backdrop-filter: blur(4px);
        border-radius: 5px;
        cursor: pointer
    `,
    
    FormTitle: styled.h1`
        background: white
    `
}
