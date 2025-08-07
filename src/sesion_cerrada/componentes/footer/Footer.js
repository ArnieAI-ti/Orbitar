import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Box,
  IconButton,
  Link,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
import useMediaQuery from "@mui/material/useMediaQuery";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const styles = (theme) => ({
  footer: {
    backgroundColor: theme.palette.background.default, // Usar el color de fondo de la sección "Qué hace diferente a Orbitar?"
    padding: theme.spacing(6, 0),
  },
  brandText: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  link: {
    color: theme.palette.text.secondary,
    transition: theme.transitions.create(["color"], {
      duration: theme.transitions.duration.shortest,
    }),
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  socialIcon: {
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.text.secondary, // Color del borde del TextField
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main, // Color del borde al pasar el ratón
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main, // Color del borde al enfocar
      },
    },
    "& .MuiInputBase-input": {
      color: theme.palette.text.primary, // Color del texto de entrada
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.text.secondary, // Color del label
    },
  },
});

const socialLinks = [
  { name: "GitHub", href: "#", icon: GitHubIcon },
  { name: "Twitter", href: "#", icon: TwitterIcon },
  { name: "LinkedIn", href: "#", icon: LinkedInIcon },
];

function Footer(props) {
  const { classes, theme } = props;
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <footer className={classes.footer}>
      <WaveBorder
        upperColor={theme.palette.background.default}
        lowerColor={theme.palette.background.default}
        animationNegativeDelay={4}
      />
      <div className="container-fluid">
        <Grid container spacing={isWidthUpMd ? 5 : 3} justifyContent="space-between">
          <Grid item xs={12} md={3}>
            <Typography variant="h5" className={classes.brandText} gutterBottom>
              Orbitar
            </Typography>
            <Typography color="textSecondary">
              Una innovación de CONAUTI SAC. Transformamos la complejidad en claridad a través de la visualización inteligente de sistemas automatizados.
            </Typography>
            <Box mt={2}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  aria-label={social.name}
                  className={classes.socialIcon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon />
                </IconButton>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Navegación
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li><Link href="#vision-section" className={classes.link}>¿Qué es?</Link></li>
              <li><Link href="#problem-section" className={classes.link}>Desafíos</Link></li>
              <li><Link href="#how-it-works-section" className={classes.link}>Funcionamiento</Link></li>
              <li><Link href="#objectives-section" className={classes.link}>Objetivos</Link></li>
              <li><Link href="#feature-section" className={classes.link}>Características</Link></li>
              <li><Link href="#application-section" className={classes.link}>Casos de Uso</Link></li>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li><Link href="#" className={classes.link}>Política de Privacidad</Link></li>
              <li><Link href="#" className={classes.link}>Términos de Servicio</Link></li>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Contacto
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Mantente al tanto de las novedades de nuestro proyecto Orbitar.
            </Typography>
            <Box display="flex" mt={2}>
              <TextField
                label="Tu Email"
                variant="outlined"
                size="small"
                fullWidth
                className={classes.textField}
                InputProps={{
                  startAdornment: (
                    <EmailOutlinedIcon color="action" sx={{ mr: 1 }} />
                  ),
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ ml: 1, whiteSpace: "nowrap" }}
              >
                Enviar
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: theme.palette.text.secondary }} />
        <Box mt={5} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Orbitar by CONAUTI SAC. Todos los derechos reservados.
          </Typography>
        </Box>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Footer);
