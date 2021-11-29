import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { styles } from "./styles";
import toast from "../helpers/toast";

const { DivSection, DivImage, CadastroContainer, FormContainer, FormTitle, Buttons } = styles;

export default function Login() {

    function handleChange(target) {
        SetFormLogin({ ...formLogin, [target.name]: target.value })
    }

    const [formLogin, SetFormLogin] = useState({
        usuario: "", senha: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formLogin)

        if (!formLogin.usuario || !formLogin.senha) {
            toast.messageError("E-mail e senha são obrigatórios");
        }
    }

    async function logar() {
        const { usuario, senha } = formLogin;
        const resultado = await fetch(`http://localhost:8000/api/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formLogin)
        });
        console.log(resultado)
        console.log(formLogin, "formlogin")
    };

    return (
        <DivSection>
            <CadastroContainer>
                <FormContainer onSubmit={handleSubmit}>
                    <FormTitle>Login</FormTitle>
                    <TextField
                        sx={{ width: "80%" }}
                        id="outlined-basic"
                        label="*Usuário"
                        variant="outlined"
                        value={formLogin.usuario}
                        name="usuario"
                        onChange={(event) => handleChange(event.target)}
                    />
                    <TextField
                        sx={{ width: "80%" }}
                        id="outlined-basic"
                        label="*Senha"
                        variant="outlined"
                        value={formLogin.senha}
                        name="senha"
                        onChange={(event) => handleChange(event.target)}
                    />
                    <Buttons onClick={logar}>Entrar</Buttons>
                </FormContainer>
            </CadastroContainer>
            <DivImage>
            </DivImage>
        </DivSection>
    )
}