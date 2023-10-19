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

type TProps = TextFieldProps & {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const rtlTheme = createTheme({
  direction: "rtl",
});
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function CustomInput(props: TProps) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>
        <TextField
          {...props}
          inputProps={{ style: { padding: "", borderRadius: "" } }}
          onChange={(e) => props.onChange(e)}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}
