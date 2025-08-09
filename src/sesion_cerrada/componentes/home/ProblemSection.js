import React from "react";
import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  section: {
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.background.default, // Use theme's default background
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.05) 0.5px, transparent 0.5px)`,
    backgroundSize: "15px 15px",
  },
  sectionTitle: {
    marginBottom: "4rem",
    fontWeight: "bold",
    color: theme.palette.text.primary, // Título de sección en color de texto primario
  },
  card: {
    backgroundColor: theme.palette.background.paper, // Tarjetas con el fondo azul oscuro del tema
    boxShadow: theme.shadows[5],
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: theme.shadows[10],
    },
    borderRadius: theme.shape.borderRadius, // Apply global border radius
  },
  cardContent: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    color: theme.palette.primary.main, // Títulos de tarjeta en color primario (cian)
  },
});

function ProblemSection(props) {
  const { classes } = props;

  const problemCards = [
    {
      title: "Técnicos y de Uso",
      description: "Las herramientas actuales son complejas, requieren programación y no visualizan el funcionamiento de un sistema a partir de datos reales."
    },
    {
      title: "Educativos",
      description: "Enseñar automatización es un reto. Faltan herramientas visuales y prácticas que permitan experimentar sin necesidad de programar."
    },
    {
      title: "Empresariales",
      description: "Es difícil para las empresas mostrar el valor de sus soluciones tecnológicas de forma rápida y convincente a clientes no técnicos."
    },
    {
      title: "Falta de Visibilidad",
      description: "Muchos sistemas son complejos de interpretar; las soluciones actuales requieren conocimientos técnicos o programación para entender cómo operan."
    }
  ];

  return (
    <Box className={classes.section} id="problem-section">
      <div className="container-fluid">
        <Typography variant="h3" align="center" gutterBottom className={classes.sectionTitle}>
          Los Desafíos de la Automatización Actual
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {problemCards.map((card, index) => (
            <Grid item xs={12} md={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" className={classes.title}>{card.title}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
}

export default withStyles(styles)(ProblemSection);


