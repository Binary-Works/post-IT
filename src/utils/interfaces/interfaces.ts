import { Dispatch, SetStateAction } from "react";

export interface themeContextInterface {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}
