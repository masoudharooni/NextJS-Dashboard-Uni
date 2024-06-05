"use client";
import { ChangeEventHandler } from "react";

import { TextField, TextFieldProps } from "@mui/material";
import useTheme from "@/hooks/useTheme";
type TProps = TextFieldProps & {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};
export default function CustomInput(props: TProps) {
  const theme = useTheme();
  return (
    <TextField
      {...props}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "14px",
          borderColor: "#d1e6ff",
        },
        "& .MuiInputBase-input": {
          color: theme === "light" ? "#39434F" : "#fff",
        },
        "& .MuiInputLabel-root": {
          color: "#808b9a",
        },
        "& .MuiInputBase-input::placeholder": {
          color: theme === "light" ? "#D9DFE6" : "#606873",
        },
      }}
      onChange={(e) => props.onChange(e)}
    />
  );
}
