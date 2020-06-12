import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

class CustomerAR extends Component {
  render() {
    const { classes, card } = this.props;

    return (
      <Grid
        item
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
        xs={8} sm={4}
      >
        <Grid
          container
          item
          style={card}
          alignItems="center"
          direction="column"
          xs={6}
        >
          <Typography className={classes.textStyle3} style={{ margin: "auto" }}>
            1323
          </Typography>
          <Typography className={classes.textStyle1} style={{ margin: "auto" }}>
            Open Invoices
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
          <Typography className={classes.textStyle3} style={{ margin: "auto" }}>
            $980K
          </Typography>
          <Typography className={classes.textStyle1} style={{ margin: "auto" }}>
            Total Open Amount
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default CustomerAR;
