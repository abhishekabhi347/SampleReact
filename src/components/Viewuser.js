import React, { useEffect, Fragment } from "react";
import { gethome } from "../actions/home";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const Viewuser = ({ home: { home }, gethome, match }) => {
  // const [homeData] = useState({
  //   name: "Abhishek"
  // });
  // const { name } = homeData;
  useEffect(() => {
    gethome(match.params.id);
  }, [gethome, match.params.id]);
  return (
    <Fragment>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-12 p-2">
            <div className="card">
              {/* <div className="card-header">{home.name}</div> */}
              <div className="card-body text-dark">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src={require(`../assets/loginuser.png`)}
                      alt="usericon"
                      height="180"
                      width="200"
                      className="img-thumbnail"
                    ></img>
                  </div>
                  <div className="col-md-4">
                    <b>Name: </b>
                    {home.name}
                    <br></br>
                    <b>Username: </b>
                    {home.username}
                    <br></br>
                    <b>Email: </b>
                    {home.email}
                    <br></br>
                    <b>Phone: </b>
                    {home.phone}
                    <br></br>
                    <b>Website: </b>
                    {home.website}
                    <br></br>
                    <br></br>
                    <Link to={`/users`} className="card-link">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Viewuser.propTypes = {
  home: PropTypes.object.isRequired,
  gethome: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  home: state.home
});
export default connect(mapStateToProps, { gethome })(withRouter(Viewuser));
