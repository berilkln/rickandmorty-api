import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#4f67a4',
        light: '#e6e9f2',
        dark: '#072360',
    },
    secondary: {
        main: '#0fff18',
        light: '#e6e9f2',
        dark: '#072360',
    },

    error: {
        main: '#6ad619',
        light: '#e6e9f2',
        dark: '#072360',
    },

    warning: {
        main: '#6ad619',
        light: '#e6e9f2',
        dark: '#072360',
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
        fontSize: '1rem',
      
    },
  },

  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: "bold",
          fontSize: "1.2rem",
        },
      },
    },
  },
  
});

export default theme;
