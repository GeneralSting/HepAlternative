import { Theme, createTheme, responsiveFontSizes } from "@mui/material";
import i18next from "i18next";

export const lightTheme: Theme = createTheme({
  palette: {
    background: {
      paper: "#f2f2f2",
    },
    text: {
      primary: "#111111",
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "hsl(198, 58%, 43%)", // Default color when unchecked
          "&.Mui-checked": {
            color: "hsl(198, 58%, 43%)", // Color when checked
          },
        },
      },
    },
  },
});

const light = responsiveFontSizes(lightTheme);

const lightName = (): string => {
  return i18next.t("themes.light");
};

const lightCode = "lightTheme";

export { light, lightCode, lightName };
