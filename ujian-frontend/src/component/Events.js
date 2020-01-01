import React, { Component } from "react";
import { Typography, Button, Grid, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getEvents } from "../_actions/events";

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
    //this.props.match.params.id
  }

  render() {
    const { data, isLoading, error } = this.props.events;

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
          <h1>Now Loading To Server....</h1>
        </div>
      );
    }

    return (
      <div>
        <Grid container spacing={5}>
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
                      <img
                        src={entry.image}
                        style={{ width: "97%", height: "230px" }}
                      />
                    </p>
                    <p key={index}>
                      <h2>{entry.title}</h2>
                      <img
                        src="love.jpg"
                        style={{
                          width: "30px",
                          height: "30px",
                          marginTop: "0px"
                        }}
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => {
      dispatch(getEvents());

      // getEvents: (categoryid) => {
      //   dispatch(getEvents(categoryid));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
//export default connect(mapStateToProps, mapDispatchToProps)withRouter(Events);
