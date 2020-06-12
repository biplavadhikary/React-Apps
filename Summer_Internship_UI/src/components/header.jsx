import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom"
import companyLogo from "../assets/companyLogo.svg";
import backIcon from "../assets/left-arrow.svg";
import freedaBtn from "../assets/FredaButton.png";

class Header extends Component {
  renderIcon = (renderBack) => {
    //console.log("Render Back: ", renderBack === true);
    return renderBack === true ? (
      <Link to="/">
        <img
          src={backIcon}
          alt="<-"
          style={{ paddingRight: "4vw", width: "3vw", cursor: "pointer" }}
        ></img>
      </Link>
    ) : (
      <img
        src={companyLogo}
        alt="logo"
        style={{ paddingRight: "4vw", width: "3vw" }}
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
        alignItems="center"
        xs={12}
      >
        <Grid
          container
          item
          xs={4}
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
                fontSize: "2vw",
                textTransform: "capitalize",
                margin: "auto"
              }}
            >
              {title || "Adhikary Products"}
            </Typography>
          </div>
        </Grid>
        <Grid xs={2} item>
          <img
            src={freedaBtn}
            style={{
              borderRadius: "20px",
              width: "10vw",
              cursor: "pointer",
              marginRight: "2vw",
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
