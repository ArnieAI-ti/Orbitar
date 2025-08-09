import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// colors
const primary = "#8c9eff"; // Un azul suave para acentos (Indigo 200)
const secondary = "#ff8a80"; // Un rojo coral suave (Red A100)
const black = "#212121"; // Un negro más suave
const darkBlack = "#424242"; // Un gris oscuro para textos secundarios
const background = "#121212"; // Fondo muy oscuro, casi negro
const paper = "#1e1e1e"; // Un poco más claro para superficies como tarjetas
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
  shape: {
    borderRadius: 12, // Global border radius for a softer look
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
          borderRadius: 12, // Apply border radius to dialogs
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: darkBlack,
          borderRadius: 8, // Apply border radius to tooltips
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
    
