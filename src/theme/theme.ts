import { common } from "@mui/material/colors";
import { type ThemeOptions } from "@mui/material";

const Theme = () => {
  return {
    palette: {
      primary: {
        main: "#ffff00f",
      },
      secondary: {
        main: "#8AC7DB",
      },
      text: {
        primary: common.black,
      },
      divider: "rgba(210,205,205,1)",
      background: {
        default: "#000000",
      },
    },
    components: {},
    breakpoints: {},
    typography: { fontFamily: "Manrope, sans-serif" },
  } as ThemeOptions;
};

export default Theme;
