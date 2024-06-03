import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectProps } from "@mui/material/Select";
import useTheme from "@/hooks/useTheme";

type TOption = {
    value: string | number | boolean;
    label: string | number;
};
type TProps = {
    options: TOption[];
};

export default function MuiSelect(props: TProps & SelectProps) {
    const theme = useTheme();
    return (
        <FormControl
            fullWidth
            sx={{
                "& .MuiInputLabel-root": {
                    color: "#ccc",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: theme === "light" ? "#959595" : "white",
                },
                "& .MuiOutlinedInput-root": {
                    backgroundColor: theme === "light" ? "#e3ebff" : "#182237",
                    color: theme === "light" ? "#959595" : "white",
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
            }}
        >
            <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
            <Select
                {...props}
                MenuProps={{
                    PaperProps: {
                        style: {
                            backgroundColor: theme === "light" ? "#e3ebff" : "#182237",
                            color: theme === "light" ? "#959595" : "white",
                        },
                    },
                }}
            >
                {props.options.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
