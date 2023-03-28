import { themeContextInterface } from "@/utils/interfaces/interfaces";

export function modifyTheme({ darkMode, setDarkMode }: themeContextInterface) {
  if (darkMode) {
    setDarkMode(false);
    document.documentElement.classList.remove("dark");
    console.log("light mode");
  } else {
    setDarkMode(true);
    document.documentElement.classList.add("dark");
    console.log("dark mode");
  }
}
