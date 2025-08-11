import React, { Fragment } from "react";
import { Typography, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";

const styles = (theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    maxWidth: 800, // Limit content width for readability
    margin: "0 auto", // Center the content
  },
  heading: {
    marginBottom: theme.spacing(4),
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  subheading: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
  paragraph: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: "justify",
  },
});

function PrivacyPolicy(props) {
  const { classes } = props;

  return (
    <Fragment>
      <Box className={classes.container}>
        <Typography variant="h3" className={classes.heading}>
          Política de Privacidad
        </Typography>

        <Typography variant="body1" className={classes.paragraph}>
          Última actualización: 08/08/2025
        </Typography>

        <Typography variant="body1" className={classes.paragraph}>
          Esta página web ha sido desarrollada con el único propósito de presentar el proyecto de tesis Orbitar, creado por Arnie Paul Fuertes Andrade como parte de su formación profesional en SENATI y en el marco de sus prácticas en CONAUTI SAC.
        </Typography>

        <Typography variant="h5" className={classes.subheading}>
          1. Recopilación de datos
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Este sitio no recopila, almacena ni procesa datos personales de los visitantes.
        </Typography>

        <Typography variant="body1" className={classes.paragraph}>
          No utiliza cookies, formularios de registro ni herramientas de seguimiento.
        </Typography>

        <Typography variant="h5" className={classes.subheading}>
          2. Uso de la información
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Todo el contenido mostrado es únicamente para fines académicos y de divulgación del proyecto de tesis.
        </Typography>

        <Typography variant="body1" className={classes.paragraph}>
          La información sobre CONAUTI SAC se presenta solo como referencia contextual, sin utilizar sus nombres comerciales, logotipos ni material gráfico propio.
        </Typography>

        <Typography variant="h5" className={classes.subheading}>
          3. Propiedad intelectual
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Los textos, diagramas y materiales creados para el proyecto son propiedad de Arnie Paul Fuertes Andrade, salvo que se indique lo contrario.
        </Typography>

        <Typography variant="h5" className={classes.subheading}>
          4. Contacto
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Si tienes dudas sobre la información publicada, puedes escribir a: arniepaul489@gmail.com.
        </Typography>
      </Box>
    </Fragment>
  );
}

PrivacyPolicy.propTypes = {};

export default withStyles(styles, { withTheme: true })(PrivacyPolicy);