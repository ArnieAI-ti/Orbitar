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
import useMediaQuery from "@mui/material/useMediaQuery";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const socialLinks = [
  { name: "GitHub", href: "#", icon: GitHubIcon },
  { name: "Twitter", href: "#", icon: TwitterIcon },
  { name: "LinkedIn", href: "#", icon: LinkedInIcon },
];

function Footer(props) {
  const { theme } = props;
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <footer style={{
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0),
      borderRadius: theme.shape.borderRadius,
    }}>
      <div className="container-fluid">
        <Grid container spacing={isWidthUpMd ? 5 : 3} justifyContent="space-between">
          <Grid item xs={12} md={3}>
            <Typography variant="h5" style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: "bold",
              color: theme.palette.primary.main,
            }} gutterBottom>
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
                  style={{
                    color: theme.palette.text.secondary,
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
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
              <li><Link href="#vision-section" style={{
                color: theme.palette.text.secondary,
                transition: theme.transitions.create(["color"], {
                  duration: theme.transitions.duration.shortest,
                }),
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}>¿Qué es?</Link></li>
              <li><Link href="#problem-section" style={{
                color: theme.palette.text.secondary,
                transition: theme.transitions.create(["color"], {
                  duration: theme.transitions.duration.shortest,
                }),
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}>Desafíos</Link></li>
              <li><Link href="#how-it-works-section" style={{
                color: theme.palette.text.secondary,
                transition: theme.transitions.create(["color"], {
                  duration: theme.transitions.duration.shortest,
                }),
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}>Funcionamiento</Link></li>
              <li><Link href="#objectives-section" style={{
                color: theme.palette.text.secondary,
                transition: theme.transitions.create(["color"], {
                  duration: theme.transitions.duration.shortest,
                }),
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}>Objetivos</Link></li>
              <li><Link href="#feature-section" style={{
                color: theme.palette.text.secondary,
                transition: theme.transitions.create(["color"], {
                  duration: theme.transitions.duration.shortest,
                }),
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}>Características</Link></li>
              <li><Link href="#application-section" style={{
                color: theme.palette.text.secondary,
                transition: theme.transitions.create(["color"], {
                  duration: theme.transitions.duration.shortest,
                }),
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}>Casos de Uso</Link></li>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li><Link href="#" style={{
                color: theme.palette.text.secondary,
                transition: theme.transitions.create(["color"], {
                  duration: theme.transitions.duration.shortest,
                }),
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}>Política de Privacidad</Link></li>
              <li><Link href="#" style={{
                color: theme.palette.text.secondary,
                transition: theme.transitions.create(["color"], {
                  duration: theme.transitions.duration.shortest,
                }),
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}>Términos de Servicio</Link></li>
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
                style={{
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
                }}
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
};

export default Footer;