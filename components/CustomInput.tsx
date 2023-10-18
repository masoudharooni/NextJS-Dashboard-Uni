"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useLayoutEffect } from "react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";

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
  useLayoutEffect(() => {
    document.body.setAttribute("dir", "rtl");
  }, []);
  const rtlTheme = createTheme({
    direction: "rtl",
  });
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={rtlTheme}>
        <TextField
          label={label}
          variant={variant}
          fullWidth
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}
