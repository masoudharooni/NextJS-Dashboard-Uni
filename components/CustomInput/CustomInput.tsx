"use client";
import { ChangeEventHandler } from "react";

import {
  TextField,
  TextFieldProps,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

import useTheme from "@/hooks/useTheme";

import styled from "styled-components";
type TProps = TextFieldProps & {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const rtlTheme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#1B85F3",
    },
  },
});
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
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
      font-family: "vazir";
    }
    & .MuiInputLabel-root {
      color: #808b9a;
      font-family: "vazirBold";
    }
    & .MuiInputBase-input::placeholder {
      color: ${() => (theme === "light" ? "#D9DFE6" : "#606873")};
      font-family: "vazirLight";
    }
  `;
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>
        <CustomTextField {...props} onChange={(e) => props.onChange(e)} />
      </ThemeProvider>
    </CacheProvider>
  );
}
