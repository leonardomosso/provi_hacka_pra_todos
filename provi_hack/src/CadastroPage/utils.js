export default async function handleLoardViaCep(cep, setForm, form) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
            method: "GET"
        });

        const { logradouro, bairro, localidade, uf } = await response.json();

        setForm({...form,
            logradouro: logradouro,
            bairro: bairro,
            cidade: localidade,
            uf: uf
        })
    } catch (error) {
        console.log(error)
    }
}
