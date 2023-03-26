import { themeContext } from "@/context_api/theme_context/themeContext";
import { modifyTheme } from "@/functions/theme/modifyTheme";
import { useContext } from "react";
import { MdOutlineNightlightRound, MdSunny } from "react-icons/md";
import { IconContainer } from "../icon_container/iconContainer";

export const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(themeContext);
  return (
    <IconContainer size="35px" onClick={() => modifyTheme({ darkMode, setDarkMode })}>
      {darkMode ? <MdSunny size={20} /> : <MdOutlineNightlightRound size={20} />}
    </IconContainer>
  );
};
