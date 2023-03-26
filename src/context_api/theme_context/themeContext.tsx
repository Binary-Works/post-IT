import { themeContextInterface } from "@/utils/interfaces/interfaces";
import { createContext, useState, ReactNode } from "react";

// default theme sate
const defaultThemeState = {
  darkMode: false,
  setDarkMode: () => {},
} as themeContextInterface;

// themeContext
export const themeContext = createContext<themeContextInterface>(defaultThemeState);

type themeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: themeProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <themeContext.Provider value={{ darkMode, setDarkMode }}>{children}</themeContext.Provider>
  );
};
