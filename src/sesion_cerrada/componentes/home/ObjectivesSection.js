import React from "react";
import { Typography, Box, ListItemText, ListItemIcon, Card, CardContent, Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const styles = (theme) => ({
  section: {
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.05) 0.5px, transparent 0.5px)`,
    backgroundSize: "15px 15px",
  },
  title: {
    marginBottom: theme.spacing(6),
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: theme.spacing(3),
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  generalObjectiveCard: {
    marginBottom: theme.spacing(6),
    backgroundColor: theme.palette.background.default, // Un color de fondo diferente para la tarjeta
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
  },
  specificObjectiveCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px) scale(1.02)",
      boxShadow: theme.shadows[8],
    },
  },
  listItemIcon: {
    minWidth: "35px",
    color: theme.palette.primary.main,
  },
});

function ObjectivesSection(props) {
  const { classes } = props;

  const specificObjectives = [
    "Interpretar datos provenientes de sensores, simulaciones o registros operativos.",
    "Generar automáticamente diagramas de flujo por bloques.",
    "Facilitar la comprensión de sistemas automatizados a clientes, técnicos o estudiantes.",
    "Integrar esta solución con productos actuales de Conauti como capa de valor añadido.",
  ];

  return (
    <Box className={classes.section} id="objectives-section">
      <div className="container-fluid">
        <Typography variant="h3" className={classes.title}>
          Objetivos de Orbitar
        </Typography>

        <Card className={classes.generalObjectiveCard} data-aos="fade-up">
          <CardContent>
            <Typography variant="h5" className={classes.subtitle}>
              Objetivo General
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Desarrollar una herramienta visual inteligente que permita representar, analizar y comunicar el funcionamiento de sistemas automatizados inmóticos, transformando datos reales en diagramas visuales comprensibles para todo tipo de usuarios, sin necesidad de conocimientos técnicos.
            </Typography>
          </CardContent>
        </Card>

        <Box>
          <Typography variant="h5" className={classes.subtitle}>
            Objetivos Específicos
          </Typography>
          <Grid container spacing={3}>
            {specificObjectives.map((objective, index) => (
              <Grid item xs={12} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className={classes.specificObjectiveCard}>
                  <CardContent>
                    <Box display="flex" alignItems="center">
                      <ListItemIcon className={classes.listItemIcon}>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText primary={objective} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </Box>
  );
}

ObjectivesSection.propTypes = {};

export default withStyles(styles)(ObjectivesSection);
