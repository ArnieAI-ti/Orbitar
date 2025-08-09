import withStyles from '@mui/styles/withStyles';

const styles = theme => ({
  "@global": {
    "*": {
      cursor: "default", // Establece el cursor predeterminado para todo
    },
    "a, button, input[type='submit'], input[type='button'], input[type='reset'], input[type='image'], label[for], select, textarea": {
      cursor: "pointer", // Restaura el cursor de mano para elementos interactivos
    },
    ".container": {
      width: "100%",
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      marginRight: "auto",
      marginLeft: "auto",
      [theme.breakpoints.up("sm")]: {
        maxWidth: 540
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 720
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 1170
      }
    },
    ".row": {
      display: "flex",
      flexWrap: "wrap",
      marginRight: -theme.spacing(2),
      marginLeft: -theme.spacing(2)
    },
    ".container-fluid": {
      width: "100%",
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 1370
    }
  }
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
