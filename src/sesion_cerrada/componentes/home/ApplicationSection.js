import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { withStyles } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import useWidth from "../../../shared/functions/useWidth";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';

const styles = (theme) => ({
  section: {
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.background.paper, // Usar el color de fondo del papel del tema
  },
  sectionTitle: {
    marginBottom: theme.spacing(6),
    fontWeight: "bold",
  },
  cardWrapper: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 400,
    },
  },
  gridItem: {
    height: "100%",
  },
});

function ApplicationSection(props) {
  const { classes, theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const applications = [
    {
      icon: <MonetizationOnIcon style={{ fontSize: 40 }} />,
      color: "#3F51B5",
      headline: "Ventas",
      text: "Presentaciones de producto claras y convincentes que aceleran el ciclo de ventas y aumentan la confianza del cliente."
    },
    {
      icon: <SchoolIcon style={{ fontSize: 40 }} />,
      color: "#4CAF50",
      headline: "Educación",
      text: "Una herramienta de enseñanza práctica y visual que facilita el aprendizaje y la experimentación con sistemas complejos."
    },
    {
      icon: <EngineeringIcon style={{ fontSize: 40 }} />,
      color: "#FF9800",
      headline: "Ingeniería",
      text: "Validación y depuración de sistemas complejos de forma más rápida y eficiente, reduciendo costes y tiempos de desarrollo."
    }
  ];

  return (
    <Box className={classes.section} id="application-section">
      <div className="container-fluid">
        <Typography variant="h3" align="center" className={classes.sectionTitle}>
          Casos de Uso y Beneficios
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Orbitar es una capa de valor añadido que potencia la comprensión, presentación y validación de sistemas automatizados en diversas áreas.
        </Typography>
        <Box mt={6}>
          <Grid
            container
            spacing={calculateSpacing(width, theme)}
            justifyContent="center"
            alignItems="stretch" // Asegura que todos los items tengan la misma altura
          >
            {applications.map((element, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.cardWrapper}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? (index * 200).toString() : "0"}
                key={index}
              >
                <div className={classes.gridItem}>
                  <FeatureCard
                    Icon={element.icon}
                    color={element.color}
                    headline={element.headline}
                    text={element.text}
                    height="100%" // Prop para que la tarjeta ocupe toda la altura
                    hasBorder // Prop para activar el borde superior de color
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </Box>
  );
}

ApplicationSection.propTypes = {};

export default withStyles(styles, { withTheme: true })(ApplicationSection);

