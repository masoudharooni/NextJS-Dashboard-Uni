import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useTheme from "@/hooks/useTheme";

type TOption = {
    value: string | number;
    label: string | number;
};
type TProps = {
    value: string;
    handleChange: (event: SelectChangeEvent) => void;
    label: string;
    options: TOption[];
};

export default function MuiSelect({
    value,
    handleChange,
    label,
    options,
}: TProps) {
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
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={label}
                onChange={handleChange}
                MenuProps={{
                    PaperProps: {
                        style: {
                            backgroundColor: theme === "light" ? "#e3ebff" : "#182237",
                            color: theme === "light" ? "#959595" : "white",
                        },
                    },
                }}
            >
                {options.map(({ value, label }) => (
                    <MenuItem
                        key={value}
                        value={value}
                    >
                        {label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
