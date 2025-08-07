import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import HowItWorksSection from "./HowItWorksSection";
import ProblemSection from "./ProblemSection";
import ApplicationSection from "./ApplicationSection";
import VisionSection from "./VisionSection";
import ObjectivesSection from "./ObjectivesSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <VisionSection />
      <ProblemSection />
      <HowItWorksSection />
      <ObjectivesSection />
      <FeatureSection />
      <ApplicationSection />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
