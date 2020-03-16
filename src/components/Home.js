import React, { useState, useEffect } from "react";
import { loadhome } from "../actions/home";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ home: { homes }, loadhome }) => {
  const [homeData] = useState({
    name: "Abhishek"
  });
  const { name } = homeData;
  useEffect(() => {
    loadhome();
  }, [loadhome]);
  return (
    <div>
      Home Component {name} {JSON.stringify({ homes })}
    </div>
  );
};

Home.propTypes = {
  home: PropTypes.object.isRequired,
  loadhome: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  home: state.home
});
export default connect(mapStateToProps, { loadhome })(Home);
