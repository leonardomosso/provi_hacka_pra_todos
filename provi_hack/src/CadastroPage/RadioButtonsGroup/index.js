import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup({ handleChange }) {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">*Tipos (Renomear)</FormLabel>
            <RadioGroup
                aria-label="gender"
                defaultValue="Estudante"
                name="radio-buttons-group"
            >
                <FormControlLabel
                    name="tipo"
                    value="Estudante" control={<Radio />} label="Estudante"
                    onChange={(event) => handleChange(event.target)} />
                <FormControlLabel
                    name="tipo"
                    value="Voluntario"
                    control={<Radio />}
                    label="Voluntario"
                    onChange={(event) => handleChange(event.target)} />
                <FormControlLabel
                    name="tipo"
                    value="pontoDeApoio"
                    control={<Radio />}
                    label="Ponto de apoio" onChange={(event) => handleChange(event.target)} />
            </RadioGroup>
        </FormControl>
    );
}