import { useEffect, useState } from "react";

export default function useTheme(): "dark" | "light" {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);
  return isDark ? "dark" : "light";
}
