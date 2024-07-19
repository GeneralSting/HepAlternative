import { createTheme, Theme } from '@mui/material/styles';

export const baseTheme: Theme = createTheme({
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
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: 'hsl(4, 88%, 58%)', 
        },
      },
    },
  },
});