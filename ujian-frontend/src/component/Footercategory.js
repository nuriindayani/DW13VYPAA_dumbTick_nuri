import React, { Component } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import { MenuItem, Container, Grid, Avatar } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Logo from "../image/ticket.ico";
import { Favorite, Bookmark } from "@material-ui/icons";

class RelatedArticle extends Component {
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "tomato" }}>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={12} spacing={3}>
                <Grid container spacing={10}>
                  <Grid item xs={4} style={{ color: "white" }}>
                    <img src={Logo} style={{ width: "60px", height: "60px" }} />

                    <Typography
                      variant="subtitle2"
                      style={{ textAlign: "justify" }}
                    >
                      DumbTick is a web base platform that providers ticket. I
                      may not have gone where I intended to go, but I think I
                      have ended up where I needed to be.
                    </Typography>
                  </Grid>

                  <Grid item xs={4} style={{ color: "white" }}>
                    <Typography
                      variant="subtitle2"
                      style={{ fontWeight: "bold" }}
                    >
                      Links
                    </Typography>
                    <Typography variant="subtitle2">About Us</Typography>

                    <Typography
                      variant="subtitle2"
                      style={{ fontWeight: "bold", marginTop: "14px" }}
                    >
                      Follow Us on
                    </Typography>

                    <div
                      style={{
                        display: "flex",
                        width: "100px",
                        height: "30px",
                        paddingTop: "2px"
                      }}
                    >
                      <InstagramIcon style={{ marginRight: "10px" }} />
                      Instagram
                    </div>

                    <div
                      style={{
                        display: "flex",
                        width: "100px",
                        height: "30px",
                        paddingTop: "2px"
                      }}
                    >
                      <TwitterIcon
                        style={{
                          width: "30px",
                          height: "30px",
                          marginRight: "10px"
                        }}
                      />
                      Twitter
                    </div>
                  </Grid>

                  <Grid item xs={4} style={{ color: "white" }}>
                    <Typography
                      variant="subtitle1"
                      style={{ fontWeight: "bold" }}
                    >
                      Have a Question ?
                    </Typography>
                    <Typography variant="subtitle2">About Us</Typography>

                    <Typography
                      variant="subtitle2"
                      style={{ fontWeight: "bold", marginTop: "14px" }}
                    >
                      Dumb-Tick
                    </Typography>

                    <Typography variant="subtitle2" style={{ color: "white" }}>
                      Email : support@dumbtick.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <hr />
            <Grid container>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "50px"
                }}
              >
                <Typography variant="subtitle2" style={{ color: "white" }}>
                  Copyright Dumb-Tick
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

export default RelatedArticle;
