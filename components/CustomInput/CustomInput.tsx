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
import "./styles.module.css";
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

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>
        <TextField
          {...props}
          className={
            theme === "dark" ? "customTextFieldDark" : "customTextField"
          }
          onChange={(e) => props.onChange(e)}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}
