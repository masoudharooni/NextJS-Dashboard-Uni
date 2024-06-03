"use client";
import { ChangeEventHandler } from "react";

import {
  TextField,
  TextFieldProps,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import useTheme from "@/hooks/useTheme";
import styled from "styled-components";
type TProps = TextFieldProps & {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};
const rtlTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#1B85F3",
    },
  },
});
export default function CustomInput(props: TProps) {
  const theme = useTheme();

  const CustomTextField = styled(TextField)`
    & .MuiOutlinedInput-root {
      border-radius: 14px;
      border-color: #d1e6ff;
    }
    & .MuiInputBase-input {
      color: ${() => (theme === "light" ? "#39434F" : "#fff")};
    }
    & .MuiInputLabel-root {
      color: #808b9a;
    }
    & .MuiInputBase-input::placeholder {
      color: ${() => (theme === "light" ? "#D9DFE6" : "#606873")};
    }
  `;
  return (
    <ThemeProvider theme={rtlTheme}>
      <CustomTextField {...props} onChange={(e) => props.onChange(e)} />
    </ThemeProvider>
  );
}
