import React from "react";
import { Grid, Typography } from "@mui/material";
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

import DataObjectIcon from '@mui/icons-material/DataObject';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";

const iconSize = 30;

const features = [
  {
    color: "#61DAFB", // Theme Primary
    headline: "Generación Automática",
    text: "Crea los diagramas a partir de datos sin intervención manual.",
    icon: <DevicesOtherIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#4CAF50", // Vibrant Green
    headline: "Visualización Clara en 2D",
    text: "Los procesos se entienden como un flujo lógico de bloques.",
    icon: <AspectRatioIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  
  {
    color: "#FF9800", // Vibrant Orange
    headline: "Basado en Datos Reales",
    text: "Integra información obtenida de sensores o simulaciones de productos reales.",
    icon: <DataObjectIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#3F51B5", // Vibrant Blue
    headline: "Versatilidad de Uso",
    text: "Aplicable en contextos educativos, técnicos, comerciales o de validación.",
    icon: <AllInclusiveIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
];

function FeatureSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div id="feature-section" style={{ backgroundColor: theme.palette.background.default, paddingTop: theme.spacing(10), paddingBottom: theme.spacing(15) }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          ¿Qué hace diferente a Orbitar?
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width, theme)} alignItems="stretch">
            {features.map((element) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={3}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                  height="100%"
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);

