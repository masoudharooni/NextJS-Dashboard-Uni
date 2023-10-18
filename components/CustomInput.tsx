"use client";

import TextField from "@mui/material/TextField";

type TProps = {
  label: string;
  variant?: "outlined" | "filled" | "standard";
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function CustomInput({
  label,
  value,
  onChange,
  variant = "outlined",
  placeholder,
}: TProps) {
  return (
    <TextField
      label={label}
      variant={variant}
      fullWidth
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
