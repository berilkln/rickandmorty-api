import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#67a6cc',
        light: '#e2eff5',
        dark: '#043c6e',
    },
    secondary: {
        main: '#88e23b',
        light: '#daf5c0',
        dark: '#1ea200',
    },
    warning: {
      main: '#d9a300',
      light: '#f4efb3',
      dark: '#d88a00',
  },
  },

  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
    },
    h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
    },
    body1: {
        fontSize: '1.1rem',
      
    },
  },

  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: "bold",
          fontSize: "1.2rem",
        },
        body: {
          fontSize: "1rem",
          },

      },
    },
  },
  
});

export default theme;
