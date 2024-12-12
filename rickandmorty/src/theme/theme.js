import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#67a6cc',
        light: '#e2eff5',
        dark: '#043d6e',
    },
    secondary: {
        main: '#89e23b',
        light: '#f0fce6',
        dark: '#007f00',
    },

    info: {
        main: '#6ad619',
        light: '#e6e9f2',
        dark: '#072360',

    },

    success: {
        main: '#6ad619',
        light: '#e6e9f2',
        dark: '#072360',
    },

    background: {
        main: '#6ad619',
        light: '#e6e9f2',
    },

    text: {
        primary: '#000000',
        secondary: '#757575',
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
