"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

type ThemeMode = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: ResolvedTheme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as ThemeMode | null;
    const initialTheme = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
    const systemTheme = getSystemTheme();
    const initialResolved = initialTheme === "system" ? systemTheme : initialTheme;

    setThemeState(initialTheme);
    setResolvedTheme(initialResolved);
    applyTheme(initialResolved);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (initialTheme === "system" || window.localStorage.getItem("theme") === "system") {
        const next = media.matches ? "dark" : "light";
        setResolvedTheme(next);
        applyTheme(next);
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const setTheme = (nextTheme: ThemeMode) => {
    const nextResolved = nextTheme === "system" ? getSystemTheme() : nextTheme;
    setThemeState(nextTheme);
    setResolvedTheme(nextResolved);
    window.localStorage.setItem("theme", nextTheme);
    applyTheme(nextResolved);
  };

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme: () => setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }),
    [theme, resolvedTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
