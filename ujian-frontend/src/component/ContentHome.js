import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../_actions/categories";
import HeaderHome from "./HeaderHome";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";

class CategoryHome extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    const { data, isLoading, error } = this.props.categories;

    if (error) {
      return (
        <div>
          <HeaderHome />
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
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Grid container>
            {data.map((entry, index) => {
              return (
                <p key={index}>
                  {" "}
                  <Grid item xs={12} sm={6}>
                    {entry.name}
                  </Grid>
                </p>
              );
            })}
          </Grid>
        </div>

        {data.map((entry, index) => {
          return <p key={index}>{entry.desc}</p>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch(getCategories());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryHome);
