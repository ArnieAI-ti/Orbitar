import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// colors
const primary = "#61DAFB"; // Un cian eléctrico para acentos
const secondary = "#00BFFF"; // Otro tono de azul brillante
const black = "#ffffff"; // El texto principal será blanco
const darkBlack = "#f2f2f2"; // Un gris muy claro para textos secundarios
const background = "#121826"; // Fondo azul noche
const paper = "#1A2035"; // Un poco más claro para superficies como tarjetas
const warningLight = "rgba(255, 234, 0, .3)";
const warningMain = "rgba(255, 234, 0, .5)";
const warningDark = "rgba(255, 234, 0, .7)";

// border
const borderWidth = 1;
const borderColor = "rgba(255, 255, 255, 0.12)";

// breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

// spacing
const spacing = 8;

const theme = createTheme({
  palette: {
    mode: 'dark', // Habilitar el modo oscuro de Material-UI
    primary: { main: primary },
    secondary: { main: secondary },
    common: {
      black,
      darkBlack,
    },
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark,
    },
    background: {
      default: background,
      paper: paper,
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    spacing,
  },
  breakpoints: {
    values: {
      xl,
      lg,
      md,
      sm,
      xs,
    },
  },
  border: {
    borderColor: borderColor,
    borderWidth: borderWidth,
  },
  components: {
    MuiExpansionPanel: {
      styleOverrides: {
        root: {
          position: "static",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          paddingLeft: spacing * 2,
          paddingRight: spacing * 2,
          borderBottom: `${borderWidth}px solid ${borderColor}`,
          [`@media (max-width:  ${sm}px)`]: {
            paddingLeft: spacing,
            paddingRight: spacing,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: borderColor,
          height: borderWidth,
        },
      },
    },
    MuiPrivateNotchedOutline: {
      styleOverrides: {
        root: {
          borderWidth: borderWidth,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        divider: {
          borderBottom: `${borderWidth}px solid ${borderColor}`,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: "100%",
          maxWidth: 430,
          marginLeft: spacing,
          marginRight: spacing,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: darkBlack,
        },
      },
    },
    MuiExpansionPanelDetails: {
      styleOverrides: {
        root: {
          [`@media (max-width:  ${sm}px)`]: {
            paddingLeft: spacing,
            paddingRight: spacing,
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

export default responsiveFontSizes(theme);
