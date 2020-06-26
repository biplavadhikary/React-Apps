import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import companyLogo from "../assets/companyLogo.svg";
import backIcon from "../assets/left-arrow.svg";
import freedaBtn from "../assets/FredaButton.png";
import BotMain from "./bot/botMain";

class Header extends Component {
  state = {
    botModalOpen: false,
  };

  renderIcon = (renderBack) => {
    //console.log("Render Back: ", renderBack === true);
    return renderBack === true ? (
      <Link to="/" style={{ width: "15%" }}>
        <img
          src={backIcon}
          alt="<-"
          autoid="navigation-back-button"
          style={{ width: "50%", paddingRight: 20, cursor: "pointer" }}
        ></img>
      </Link>
    ) : (
      <img
        src={companyLogo}
        alt="logo"
        style={{ width: 25, paddingRight: 20 }}
      ></img>
    );
  };

  renderCompanyCode = (code) => {
    if (code === undefined) return null
    else {
    return <span style={{ fontSize: 10 }}><br />{code}</span>
    } 
  }

  handleOpen = () => {
    this.setState({ botModalOpen: true });
  };

  handleMinimize = () => {
    this.setState({ botModalOpen: false });
  };

  render() {
    const { title, code, classes, back: renderBack } = this.props;

    return (
      <Grid
        container
        item
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        xs={12}
      >
        <Grid
          container
          item
          xs={4}
          sm={3}
          alignItems="center"
          justify="flex-start"
          direction="row"
          style={{ margin: "2vh 1vw 0 1vw" }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            {this.renderIcon(renderBack)}
            <Typography
              variant="h5"
              gutterBottom
              style={{
                color: "whitesmoke",
                fontSize: 15,
                textTransform: "capitalize",
                margin: "auto 0",
              }}
            >
              {title || "Adhikary Products"}
              {this.renderCompanyCode(code)}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={2} sm={2}>
          <Paper
            style={{
              backgroundColor: "#ff7b00",
              color: "white",
              textAlign: "center",
              fontSize: "0.5rem",
              padding: 5,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            Receivables Dashboard
          </Paper>
        </Grid>
        <Grid xs={4} sm={3} item>
          <img
            src={freedaBtn}
            autoid="professor-button"
            style={{
              borderRadius: 40,
              height: 28,
              cursor: "pointer",
              margin: "auto 1vw",
              paddingTop: 8,
              float: "right",
            }}
            alt="Professor Bot"
            onClick={this.handleOpen}
          ></img>
        </Grid>
        <div style={{ display: "none" }}>
          <BotMain
            classes={classes}
            open={this.state.botModalOpen}
            handleMinimize={this.handleMinimize}
          />
        </div>
      </Grid>
    );
  }
}

export default Header;