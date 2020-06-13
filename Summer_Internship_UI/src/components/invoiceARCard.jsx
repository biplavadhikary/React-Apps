import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  textCenter: {
    margin: "auto", 
    textAlign: "center"
  }
}

class InvoiceARCard extends Component {
  render() {
    const { title, value, card, classes } = this.props;

    return (
      <Zoom in={true}>
        <Grid
          container
          item
          style={card}
          alignItems="center"
          direction="column"
          xs={6}
          sm={4} 
        >
          <Typography className={classes.textStyle1 + " " + classes.textCenter}>
            {title}
          </Typography>
          <Typography className={classes.textStyle3 + " " + classes.textCenter}>
            {value}
          </Typography>
        </Grid>
      </Zoom>
    );
  }
}

export default withStyles(styles)(InvoiceARCard);