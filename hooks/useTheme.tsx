import { useEffect, useState } from "react";

export default function useTheme(): "dark" | "light" {
  const [isDark, setIsDark] = useState<boolean>(document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(handleThemeChange);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Clean-up function
    return () => observer.disconnect();
  }, []);

  return isDark ? "dark" : "light";
}
