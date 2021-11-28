import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import makeStyles from "./makeStyles";
import RadioButtonsGroup from "./RadioButtonsGroup";
import { styles } from "./styles";
import handleLoardViaCep from "./utils";
import Input from "../Components/Input/index"

const { DivSection, DivImage, CadastroContainer, FormContainer, FormTitle, FormatDivision, Buttons } = styles;

const CadastroPage = () => {
    const [form, setForm] = useState({
        nome: "", usuario: "", email: "", contato: "", numero: "",
        bairro: "", cidade: "", uf: "", logradouro: "", senha: "", tipo: ""
    })

    const [cep, setCep] = useState("");
    const classes = makeStyles();

    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }

    useEffect(() => {
        if (cep.length === 8) {
            handleLoardViaCep(cep, setForm, form)
        }
    }, [cep])

    function handleChange(target) {
        setForm({ ...form, [target.name]: target.value })
        if (cep.length === 8) {
            handleLoardViaCep(cep, setForm, form)
        }
    }

    console.log(form)

    function handleSubmit(e) {
        e.preventDefault()
        if (!form.nome || !form.usuario || !form.senha || !form.tipo) {
            console.log("erro")
        }
    }

    return (
        <DivSection>
            <DivImage>
                <button onClick={goToHome}>Back</button>
            </DivImage>
            <CadastroContainer>
                <FormContainer onSubmit={handleSubmit}>
                    <FormTitle>Cadastre-se</FormTitle>

                    <TextField
                        className={classes.input}
                        sx={{ width: "80%" }}
                        id="outlined-basic"
                        label="*Nome"
                        variant="outlined"
                        value={form.nome}
                        name="nome"
                        onChange={(event) => handleChange(event.target)}
                    />
                    <TextField
                        sx={{ width: "80%" }}
                        id="outlined-basic"
                        label="*Usuário"
                        variant="outlined"
                        value={form.usuario}
                        name="usuario"
                        onChange={(event) => handleChange(event.target)}
                    />
                    <TextField
                        sx={{ width: "80%" }}
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                        value={form.email}
                        name="email"
                        onChange={(event) => handleChange(event.target)}
                    />
                    <TextField
                        sx={{ width: "80%" }}
                        id="outlined-basic"
                        label="Telefone"
                        variant="outlined"
                        value={form.contato}
                        name="contato"
                        onChange={(event) => handleChange(event.target)}
                    />

                    <FormatDivision>
                        <TextField
                            sx={{ width: "50%" }}
                            id="outlined-basic"
                            label="CEP"
                            variant="outlined"
                            value={cep}
                            name="cep"
                            onChange={(event) => setCep(event.target.value)}
                        />
                        <TextField
                            sx={{ width: "50%" }}
                            id="outlined-basic"
                            label="Estado"
                            variant="outlined"
                            value={form.uf}
                            name="uf"
                            onChange={(event) => handleChange(event.target)}
                        />
                    </FormatDivision>

                    <FormatDivision>
                        <TextField
                            sx={{ width: "50%" }}
                            id="outlined-basic"
                            label="Cidade"
                            variant="outlined"
                            value={form.cidade}
                            name="cidade"
                            onChange={(event) => setCep(event.target)}
                        />
                        <TextField
                            sx={{ width: "50%" }}
                            id="outlined-basic"
                            label="Bairro"
                            variant="outlined"
                            value={form.bairro}
                            name="bairro"
                            onChange={(event) => handleChange(event.target)}
                        />
                    </FormatDivision>

                    <RadioButtonsGroup handleChange={handleChange} />

                    <TextField
                        sx={{ width: "80%" }}
                        id="outlined-basic"
                        label="*Senha"
                        variant="outlined"
                        value={form.senha}
                        name="senha"
                        onChange={(event) => handleChange(event.target)}
                    />
                    <Buttons>Cadastrar</Buttons>
                </FormContainer>
            </CadastroContainer>
        </DivSection>
    )
}

export default CadastroPage;