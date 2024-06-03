import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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
    return (
        <FormControl fullWidth sx={{direction: "rtl"}}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={label}
                onChange={handleChange}
            >
                {options.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
