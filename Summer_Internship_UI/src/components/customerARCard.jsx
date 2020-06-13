import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";

class CustomerARCard extends Component {
  render() {
    const { title, value, card, classes } = this.props;

    return (
      <Zoom in={true} out={true}>
        <Grid
          container
          item
          style={card}
          alignItems="center"
          direction="column"
          xs={6}
        >
          <Typography className={classes.textStyle3} style={{ margin: "auto" }}>
            {value}
          </Typography>
          <Typography className={classes.textStyle1} style={{ margin: "auto" }}>
            {title}
          </Typography>
        </Grid>
      </Zoom>
    );
  }
}

export default CustomerARCard;