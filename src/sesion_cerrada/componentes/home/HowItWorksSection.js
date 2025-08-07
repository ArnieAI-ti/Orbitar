import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { withStyles } from "@mui/styles";
import DataObjectIcon from '@mui/icons-material/DataObject';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const styles = (theme) => ({
  section: {
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.background.default,
    position: "relative",
  },
  title: {
    marginBottom: theme.spacing(8),
    textAlign: "center",
    fontWeight: "bold",
  },
  timelineContainer: {
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      height: "100%",
      width: "2px",
      backgroundColor: theme.palette.primary.main,
      opacity: 0.3,
    },
  },
  stepContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(8),
    position: "relative",
    width: "100%",
    "&:nth-of-type(odd)": {
      flexDirection: "row-reverse",
    },
  },
  card: {
    width: "calc(50% - 50px)",
    padding: theme.spacing(2),
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper, // Fondo de la tarjeta
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: theme.shadows[8],
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  iconContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `0 0 0 4px ${theme.palette.background.default}`,
    zIndex: 1,
  },
  stepIcon: {
    fontSize: 30,
    color: theme.palette.common.white,
  },
  stepTitle: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  stepDescription: {
    color: theme.palette.text.secondary,
  },
});

const steps = [
  {
    icon: <DataObjectIcon />,
    title: "Paso 1: Captura y Flexibilidad de Datos",
    description: "Orbitar se conecta a cualquier fuente de datos: sensores en tiempo real, registros históricos de operación o datos de simulación. Su arquitectura flexible se adapta a diversos entornos tecnológicos, permitiendo una integración sencilla con sus sistemas existentes.",
  },
  {
    icon: <PsychologyIcon />,
    title: "Paso 2: Procesamiento Inteligente y Reconstrucción Lógica",
    description: "Nuestro motor inteligente interpreta los datos recopilados, identifica patrones complejos y reconstruye la lógica subyacente del sistema. Esto permite entender cómo el sistema 'piensa' y toma decisiones, incluso sin acceso a su código fuente o configuraciones internas.",
  },
  {
    icon: <AccountTreeIcon />,
    title: "Paso 3: Generación Visual Interactiva de Diagramas",
    description: "El resultado del procesamiento es un diagrama visual dinámico y automático por bloques. Cada bloque representa una parte funcional del sistema (condiciones, acciones, decisiones, entradas y salidas), y sus conexiones muestran el flujo lógico de funcionamiento de manera comprensible en un plano 2D.",
  },
  {
    icon: <VerifiedUserIcon />,
    title: "Paso 4: Análisis, Comunicación y Validación",
    description: "El diagrama generado facilita el análisis técnico, la detección de errores e incoherencias lógicas, y la validación del comportamiento del sistema. Además, permite comunicar su funcionamiento de forma clara y convincente a cualquier persona, sin importar su nivel técnico, fortaleciendo tanto el área técnica como la comercial.",
  },
];

function HowItWorksSection(props) {
  const { classes } = props;

  return (
    <Box className={classes.section} id="how-it-works-section">
      <div className="container-fluid">
        <Typography variant="h3" className={classes.title}>
          ¿Cómo Funciona Orbitar?
        </Typography>
        <Box className={classes.timelineContainer}>
          {steps.map((step, index) => (
            <Box key={index} className={classes.stepContainer} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" component="h3" className={classes.stepTitle}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" className={classes.stepDescription}>
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
              <Box className={classes.iconContainer}>
                {React.cloneElement(step.icon, { className: classes.stepIcon })}
              </Box>
            </Box>
          ))}
        </Box>
      </div>
    </Box>
  );
}

HowItWorksSection.propTypes = {};

export default withStyles(styles)(HowItWorksSection);