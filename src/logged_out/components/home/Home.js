import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeroSection />
      <PricingSection />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
