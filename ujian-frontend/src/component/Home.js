import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import HeaderHome from "./HeaderHome";
import Events from "./Events";
import CategoryHome from "./CategoryHome";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: "lavender" }}>
      <HeaderHome />
      <Grid
        container
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "50px"
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={12}
            style={{
              justifyContent: "center",
              display: "flex",
              marginBottom: "25px"
            }}
          >
            <TextField
              placeholder="Search  Event"
              style={{ width: "80%", justifyContent: "center" }}
            ></TextField>{" "}
            <SearchIcon />
          </Grid>
          <Grid xs={12}>
            <Typography variant="h4" gutterBottom style={{ color: "tomato" }}>
              Category
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <CategoryHome />
            </div>
            <div>
              <Typography variant="h4" gutterBottom style={{ color: "tomato" }}>
                Today
              </Typography>
              <Events />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
