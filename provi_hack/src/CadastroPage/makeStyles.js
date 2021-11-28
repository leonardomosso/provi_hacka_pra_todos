import{ makeStyles} from '@material-ui/styles';

export default makeStyles((theme) => (
    {
        root: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },
        input: {
            background: "#FFFFFF",
            border: "1px solid #EF5350",
            boxSizing: "border-box",
            backdropFilter: "blur(4px)",
            borderRadius: "5px"
        }
    }
))