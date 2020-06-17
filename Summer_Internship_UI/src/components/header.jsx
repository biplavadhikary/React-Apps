import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import companyLogo from "../assets/companyLogo.svg";
import backIcon from "../assets/left-arrow.svg";
import freedaBtn from "../assets/FredaButton.png";

class Header extends Component {
  renderIcon = (renderBack) => {
    //console.log("Render Back: ", renderBack === true);
    return renderBack === true ? (
      <Link to="/" style={{ width: "15%" }}>
        <img
          src={backIcon}
          alt="<-"
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

  render() {
    const { title, back: renderBack } = this.props;

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
            style={{
              borderRadius: 40,
              height: 28,
              cursor: "pointer",
              margin: "auto 1vw",
              paddingTop: 8,
              float: "right",
            }}
            alt="Professor Bot"
          ></img>
        </Grid>
      </Grid>
    );
  }
}

export default Header;
