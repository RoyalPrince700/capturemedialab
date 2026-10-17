import { createContext, useContext, useMemo, useState } from "react";

const STORAGE_KEY = "cml-theme";
const ThemeContext = createContext(null);

function getStoredTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* private mode / blocked storage */
  }
  return "dark";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const color = theme === "light" ? "#f3eee4" : "#070707";
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }
  meta.content = color;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    const initial = getStoredTheme();
    applyTheme(initial);
    return initial;
  });

  const value = useMemo(() => {
    const setTheme = (next) => {
      setThemeState((current) => {
        const nextTheme = typeof next === "function" ? next(current) : next;
        applyTheme(nextTheme);
        return nextTheme;
      });
    };

    return {
      theme,
      setTheme,
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    };
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
