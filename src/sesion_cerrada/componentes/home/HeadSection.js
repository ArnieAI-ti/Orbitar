import React, { Fragment, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Card, Button, Hidden, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  gradientText: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[3], // More subtle shadow
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    borderRadius: theme.shape.borderRadius, // Apply global border radius
    transition: "transform 0.3s ease-in-out", // Smooth transition for hover effects
    position: "relative", // Needed for overlay positioning
    overflow: "hidden", // Hide overflow of blur effect
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("xl")]: {
      width: "auto",
    },
  },
  blurOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "blur(0px)", // Initial state, no blur
    transition: "backdropFilter 0.3s ease-in-out",
    pointerEvents: "none", // Allow clicks to pass through
    "&:hover": {
      backdropFilter: "blur(5px)", // Apply blur on hover
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.background.default,
    paddingBottom: theme.spacing(2),
  },
  image: {
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: theme.shape.borderRadius,
    transition: "transform 0.1s linear", // Smooth transition for parallax
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function HeadSection(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const iframeRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 64; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (iframeRef.current) {
        const scrollY = window.scrollY;
        // Adjust the parallax speed as needed (e.g., scrollY * 0.2)
        iframeRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div id="root" className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography variant={isWidthUpLg ? "h3" : "h4"} className={classes.gradientText}>
                          Orbitar: Sistema de Automatización Visual Inteligente
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUpLg ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            Transformamos datos complejos en diagramas visuales dinámicos y comprensibles. Tu sistema, a la vista de todos.
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                          onClick={() => scrollToSection("vision-section")}
                        >
                          Descubre Qué es Orbitar
                        </Button>
                      </div>
                    </Box>
                  </Grid>
                  <Hidden mdDown>
                    <Grid item md={6}>
                      <iframe
                        title="header-animation"
                        src={`${process.env.PUBLIC_URL}/images/logged_out/headerImage.html`}
                        className={classes.image}
                        ref={iframeRef}
                      />
                      <div className={classes.blurOverlay}></div>
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.background.default}
        lowerColor={theme.palette.background.paper}
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
