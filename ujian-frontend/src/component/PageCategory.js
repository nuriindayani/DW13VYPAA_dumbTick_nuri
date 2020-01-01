import React, { Component } from "react";
import { Typography, Button, Grid, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Titlecategory from "./Titlecategory";
import Footercategory from "./Footercategory";
import Chooselocation from "./Chooselocation";
import Choosedate from "./Choosedate";
import { getPagecategories } from "../_actions/pagecategories";

class Pagecategories extends Component {
  componentDidMount() {
    this.props.getPagecategories(this.props.match.params.id);
    //this.props.match.params.id
  }

  render() {
    const { data, isLoading, error } = this.props.pagecategories;

    if (error) {
      return (
        <div>
          <h1>Error</h1>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div>
          <h1>Now Loading To Server</h1>
        </div>
      );
    }

    return (
      <div style={{ backgroundColor: "lightsalmon" }}>
        <Titlecategory />
        {data.slice(0, 1).map((entry, index) => (
          <p key={index} style={{ marginLeft: "20px" }}>
            <h2>{entry.category.name}</h2>
          </p>
        ))}
        <div style={{ display: "flex", marginLeft: "40px" }}>
          <p>Sort by :</p>
          <Choosedate />
          <Chooselocation />
        </div>

        <Grid
          container
          spacing={5}
          style={{ display: "flex", flexDirection: "row" }}
        >
          {/* {data.slice(0, 1).map((entry, index) => (
            <p key={index}>
              <h2>{entry.category.name}</h2>
            </p>
          ))} */}
          }}
          {data.map((entry, index) => {
            return (
              <Grid
                item
                xs={4}
                style={{
                  fontFamily: "Roboto",
                  width: "60%",
                  justifyContent: "center"
                }}
              >
                <Paper style={{ justifyContent: "center" }}>
                  <div
                    key={index}
                    style={{
                      width: "97%",
                      margin: "auto"
                    }}
                  >
                    <p key={index}>
                      <h2>{entry.price}</h2>
                    </p>
                    <p key={index}>
                      <img
                        src={entry.image}
                        style={{ width: "97%", height: "230px" }}
                      />
                    </p>
                    <p key={index}>
                      <h4 style={{ color: "tomato" }}>{entry.start_time} </h4>
                    </p>
                    <p style={{ textAlign: "justify" }} key={index}>
                      {entry.desc}
                    </p>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Footercategory />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pagecategories: state.pagecategories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPagecategories: categoryid => {
      dispatch(getPagecategories(categoryid));

      // getEvents: (categoryid) => {
      //   dispatch(getEvents(categoryid));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Pagecategories));
//export default connect(mapStateToProps, mapDispatchToProps)withRouter(Events);
