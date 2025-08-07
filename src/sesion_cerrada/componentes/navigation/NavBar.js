import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  Box,
} from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.background.paper
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight
  },
  brandText: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 700,
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Añade una sombra sutil al texto
    background: `linear-gradient(45deg, #00FFFF 30%, #00BFFF 90%)`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  brandTextContainer: {
    display: "inline-block", // Necesario para que la transformación funcione correctamente
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

function NavBar(props) {
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;

  const scrollToSection = (id, extraOffset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const baseOffset = 64; // Altura de la barra de navegación fija
      const finalOffset = baseOffset + extraOffset;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - finalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    handleMobileDrawerClose();
  };

  const menuItems = [
    {
      link: "/",
      name: "Inicio",
      icon: <HomeIcon style={{ color: "white" }} />,
      onClick: () => scrollToSection("root") // Asumiendo que el id del inicio es 'root'
    },
    {
      link: "#vision-section",
      name: "¿Qué es?",
      icon: <RocketLaunchIcon style={{ color: "white" }} />,
      onClick: () => scrollToSection("vision-section")
    },
    {
      link: "#problem-section",
      name: "Desafíos",
      icon: <TrendingUpIcon style={{ color: "white" }} />,
      onClick: () => scrollToSection("problem-section", 120) // Ajuste de 120px más arriba
    },
    {
      link: "#how-it-works-section",
      name: "Funcionamiento",
      icon: <HelpOutlineIcon style={{ color: "white" }} />,
      onClick: () => scrollToSection("how-it-works-section")
    },
    {
      link: "#objectives-section",
      name: "Objetivos",
      icon: <TrackChangesIcon style={{ color: "white" }} />,
      onClick: () => scrollToSection("objectives-section")
    },
    {
      link: "#feature-section",
      name: "Características",
      icon: <LightbulbOutlinedIcon style={{ color: "white" }} />,
      onClick: () => scrollToSection("feature-section")
    },
    {
      link: "#application-section",
      name: "Casos de Uso",
      icon: <AppsIcon style={{ color: "white" }} />,
      onClick: () => scrollToSection("application-section")
    }
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Box className={classes.brandTextContainer}>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="primary"
                onClick={() => scrollToSection("root")}
                style={{ cursor: "pointer" }}
              >
                Orbitar
              </Typography>
            </Box>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
                size="large">
                <MenuIcon style={{ color: "#00BFFF" }} />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              {menuItems.map(element => {
                if (element.link) {
                  return (
                    <a
                      key={element.name}
                      href={element.link}
                      className={classes.noDecoration}
                      onClick={element.onClick}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </a>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));