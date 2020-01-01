import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../_actions/categories";
import HeaderHome from "./HeaderHome";
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
          {data.map((entry, index) => {
            return (
              <p key={index}>
                {" "}
                <Button
                  variant="outlined"
                  style={{
                    color: "white",
                    backgroundColor: "tomato",
                    marginLeft: "10px",
                    width: "130px",
                    height: "35px"
                  }}
                  onClick={() => {
                    window.location = `/PageCategory/${entry.id}`;
                  }}
                >
                  {entry.name}{" "}
                </Button>
              </p>
            );
          })}
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
