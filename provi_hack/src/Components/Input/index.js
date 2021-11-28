// import styled from "styled-components";

// const CardInput = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 3px
// `

// const Inputs = styled.input`
//     width: 303px;
//     height: 40px;

//     background: #FFFFFF;
//     border: 1px solid #EF5350;
//     box-sizing: border-box;
//     backdrop-filter: blur(4px);

//     border-radius: 5px;
//     padding: 5px
// `
// const Label = styled.label`
// font-family: Nunito;
// font-style: normal;
// font-weight: normal;
// font-size: 18px;
// line-height: 25px;
// color: #000000;
// `

// export default function Input({values, placeholder,nameInput, label, handleChange}) {
//     return (
//         <CardInput>
//         <Label>{label}</Label>
//         <Inputs 
//             name={nameInput}
//             placeholder={placeholder}
//             value={values}
//             onChange={(e) => handleChange(e)}
//             />
//         </CardInput>
//     )
// }