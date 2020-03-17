import React, { useEffect, Fragment } from "react";
import { loadhome } from "../actions/home";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const Home = ({ home: { homes }, loadhome }) => {
  // const [homeData] = useState({
  //   name: "Abhishek"
  // });
  // const { name } = homeData;
  useEffect(() => {
    loadhome();
  }, [loadhome]);
  return (
    <Fragment>
      <div className="container mt-2">
        <div className="row">
          {homes.map((user, i) => (
            <div className="col-md-3 p-2" key={i}>
              <div className="card">
                <div className="card-header">{user.name}</div>
                <div className="card-body text-danger">
                  <img
                    src={require(`../assets/loginuser.png`)}
                    alt="usericon"
                    className="img-thumbnail"
                  ></img>
                  <br></br>
                  <br></br>
                  <Link to={`/user/${user.id}`} className="card-link">
                    More Info
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  home: PropTypes.object.isRequired,
  loadhome: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  home: state.home
});
export default connect(mapStateToProps, { loadhome })(withRouter(Home));
