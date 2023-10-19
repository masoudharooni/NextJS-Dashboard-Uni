"use client";
import { ChangeEventHandler } from "react";

import {
  TextField,
  TextFieldProps,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

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

const useStyles = makeStyles({
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      borderColor: "#D1E6FF",
    },
    "& .MuiInputBase-input": {
      color: "#39434F",
      fontFamily: "vazir",
    },
    "& .MuiInputLabel-root": {
      color: "#808B9A",
      fontFamily: "vazirBold",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#D9DFE6",
      fontFamily: "vazirLight",
    },
  },
});

export default function CustomInput(props: TProps) {
  const classes = useStyles();
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>
        <TextField
          {...props}
          className={classes.textField}
          onChange={(e) => props.onChange(e)}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}
