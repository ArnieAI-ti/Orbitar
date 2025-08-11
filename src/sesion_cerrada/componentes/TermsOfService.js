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
    fontSize: "3rem",
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

function TermsOfService(props) {
  const { classes } = props;

  return (
    <Fragment>
      <Box className={classes.container}>
        <Typography variant="h3" className={classes.heading}>
          Términos de Servicio
        </Typography>

        <Typography variant="body1" className={classes.paragraph}>
          Última actualización: 08/08/2025
        </Typography>

        <Typography variant="body1" className={classes.paragraph}>
          Al acceder a esta página, aceptas los siguientes términos:
        </Typography>

        <Typography variant="h5" className={classes.subheading}>
          1. Fines del sitio
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          El sitio existe únicamente para presentar el proyecto de tesis Orbitar.
        </Typography>

        <Typography variant="body1" className={classes.paragraph}>
          No constituye una oferta, venta o publicidad comercial de productos o servicios.
        </Typography>

        <Typography variant="h5" className={classes.subheading}>
          2. Limitación de responsabilidad
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          El autor no se hace responsable del uso que terceros puedan dar a la información publicada.
        </Typography>

        <Typography variant="body1" className={classes.paragraph}>
          La información se ofrece tal cual, con fines informativos y educativos.
        </Typography>

        
        <Typography variant="h5" className={classes.subheading}>
          3. Relación con CONAUTI SAC
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Orbitar es un desarrollo académico inspirado en un problema real detectado en CONAUTI SAC, como parte de las prácticas preprofesionales de Arnie Paul Fuertes Andrade.
        </Typography>

        <Typography variant="body1" className={classes.paragraph}>
          No implica que Orbitar sea un producto oficial de la empresa ni utiliza su identidad visual o logotipos.
        </Typography>

        <Typography variant="h5" className={classes.subheading}>
          4. Propiedad intelectual
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Todo el material propio del proyecto pertenece a Arnie Paul Fuertes Andrade.
        </Typography>
        
      </Box>
    </Fragment>
  );
}

TermsOfService.propTypes = {};

export default withStyles(styles, { withTheme: true })(TermsOfService);