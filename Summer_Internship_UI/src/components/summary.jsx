import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

class Summary extends Component {
  state = {};
  render() {
    const { classes, card } = this.props;

    return (
      <Grid container justify="space-between">
        <Grid
          container
          item
          style={card}
          alignItems="center"
          direction="column"
          xs={6}
        >
          <Typography className={classes.textStyle1} style={{ margin: "auto" }}>
            Total Customer
          </Typography>
          <Typography className={classes.textStyle3} style={{ margin: "auto" }}>
            2091
          </Typography>
        </Grid>
        <Grid
          container
          item
          style={card}
          alignItems="center"
          direction="column"
          xs={6}
        >
          <Typography className={classes.textStyle1} style={{ margin: "auto" }}>
            Total Open AR
          </Typography>
          <Typography className={classes.textStyle3} style={{ margin: "auto" }}>
            $43M
          </Typography>
        </Grid>
        <Grid
          container
          item
          style={card}
          alignItems="center"
          direction="column"
          xs={6}
        >
          <Typography className={classes.textStyle1} style={{ margin: "auto" }}>
            Total Open AR
          </Typography>
          <Typography className={classes.textStyle3} style={{ margin: "auto" }}>
            3 Days
          </Typography>
        </Grid>
        <Grid
          container
          item
          style={card}
          alignItems="center"
          direction="column"
          xs={6}
        >
          <Typography className={classes.textStyle1} style={{ margin: "auto" }}>
            Total Open Invoices
          </Typography>
          <Typography className={classes.textStyle3} style={{ margin: "auto" }}>
            37438
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Summary;
