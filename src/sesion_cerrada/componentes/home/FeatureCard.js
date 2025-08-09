import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: theme.shadows[3],
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: theme.shadows[5],
    },
    borderRadius: theme.shape.borderRadius,
  },
  cardContent: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  iconWrapper: {
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  borderTop: {
    borderTop: `4px solid`,
  },
});

function FeatureCard(props) {
  const { classes, Icon, color, headline, text, hasBorder } = props;

  return (
    <Card className={`${classes.card} ${hasBorder ? classes.borderTop : ""}`}
      style={{ borderColor: hasBorder ? color : "transparent" }}
    >
      <CardContent className={classes.cardContent}>
        <Box
          className={classes.iconWrapper}
          style={{
            color: "white",
            backgroundColor: color,
          }}
        >
          {Icon}
        </Box>
        <Typography variant="h5" component="h3" gutterBottom>
          {headline}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

FeatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
};

export default withStyles(styles, { withTheme: true })(FeatureCard);
