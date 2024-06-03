import useTheme from "@/hooks/useTheme";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export default function MuiInput(props: TextFieldProps) {
    const theme = useTheme();
    return (
        <TextField
            sx={{
                "& .MuiInputBase-root": {
                    backgroundColor: theme === "light" ? "#e3ebff" : "#182237",
                    color: theme === "light" ? "#959595" : "white",
                },
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                        borderColor: "#959595",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#cccc",
                    },
                },
                "& .MuiInputLabel-root": {
                    color: "#ccc",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: theme === "light" ? "#959595" : "white",
                },
            }}
            {...props}
        />
    );
}
