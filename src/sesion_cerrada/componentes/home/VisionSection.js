import React from "react";
import { Grid, Typography, Box, Card, CardContent } from "@mui/material";
import { withStyles } from "@mui/styles";
import HolographicImage from "./HolographicImage";

const floatAnimation = `
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const styles = (theme) => ({
  section: {
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.background.default,
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.05) 0.5px, transparent 0.5px)`,
    backgroundSize: "15px 15px",
    color: theme.palette.text.primary,
  },
  textContainer: {
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 2),
    },
  },
  title: {
    marginBottom: theme.spacing(6),
    textAlign: "center",
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
  paragraph: {
    marginBottom: theme.spacing(2),
    textAlign: "justify",
    color: theme.palette.text.secondary,
  },
  subheading: {
    textAlign: "left",
    color: theme.palette.text.primary,
    fontWeight: "bold",
    marginTop: theme.spacing(4),
  },
  highlight: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(4),
    },
  },
  transversalCard: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[10],
    marginBottom: theme.spacing(4),
    border: `1px solid ${theme.palette.primary.main}`,
    animation: `float 6s ease-in-out infinite`,
  },
});

function VisionSection(props) {
  const { classes } = props;

  return (
    <>
      <style>{floatAnimation}</style>
      <Box className={classes.section} id="vision-section">
        <div className="container-fluid">
          <Typography variant="h3" className={classes.title}>
            ¿Qué es Orbitar y su Origen?
          </Typography>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Box className={classes.textContainer}>
                <Card className={classes.transversalCard}>
                  <CardContent>
                    <Typography variant="h4" component="h3" sx={{ mb: 2, color: 'white' }}>
                      Una Innovación Transversal
                    </Typography>
                    <Typography variant="body1">
                      Orbitar es una <span className={classes.highlight}>capa inteligente de interpretación visual</span> que mejora la comprensión, presentación y validación de sistemas. Transforma información técnica en visualizaciones claras, beneficiando la venta de productos, la formación y la interacción con clientes no técnicos.
                    </Typography>
                  </CardContent>
                </Card>
                <Typography variant="h5" component="h3" className={classes.subheading}>
                  De la Domótica a la Inmótica Inteligente
                </Typography>
                <Typography variant="body1" className={classes.paragraph}>
                  Orbitar nace de CONAUTI SAC, empresa líder en automatización de edificios y tecnologías emergentes. Evolucionamos de la domótica a la inmótica, ofreciendo soluciones integradas para la transformación digital inmobiliaria.
                </Typography>
                <Typography variant="body1" className={classes.paragraph}>
                  Ante la complejidad de los sistemas modernos, Orbitar es una <span className={classes.highlight}>herramienta visual inteligente</span> que traduce el comportamiento de cualquier sistema automatizado en una representación gráfica clara y comprensible.
                </Typography>
                <Typography variant="h5" component="h3" className={classes.subheading}>
                  Motivación
                </Typography>
                <Typography variant="body1" className={classes.paragraph}>
                  Los sistemas inmóticos son complejos. Clientes, estudiantes y técnicos a menudo requieren conocimientos avanzados para interpretarlos, ya que las soluciones actuales exigen programación o diseño directo.
                </Typography>
                <Typography variant="body1" className={classes.paragraph}>
                  Orbitar innova generando automáticamente diagramas visuales funcionales a partir de datos reales. Esto permite comprender cómo opera un sistema sin interpretar código.
                </Typography>
                <Typography variant="body1" className={classes.paragraph}>
                  Además de facilitar el análisis técnico, Orbitar potencia el área comercial de CONAUTI, mostrando productos de forma gráfica y comprensible, lo que mejora la toma de decisiones y la confianza del cliente.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Box className={classes.imageContainer}>
                <HolographicImage
                  src={`${process.env.PUBLIC_URL}/pl.jpg`}
                  alt="Orbitar Concept"
                />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}

export default withStyles(styles, { withTheme: true })(VisionSection);