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
        style={{ width: "15%", paddingRight: 20 }}
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
          xs={7}
          sm={4}
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
                margin: "auto 0"
              }}
            >
              {title || "Adhikary Products"}
            </Typography>
          </div>
        </Grid>
        <Grid xs={4} sm={2} item>
          <img
            src={freedaBtn}
            style={{
              borderRadius: 40,
              width: "50%",
              cursor: "pointer",
              margin: "auto 2vw",
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
