import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CustomerAR from "./customerAR";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class CustomerHeader extends Component {
  render() {
    const { classes, card } = this.props;

    return (
      <Grid
        item
        container
        justify="space-between"
        item
        direction="row"
        style={{ marginBottom: 10, padding: "0 1vw" }}
      >
        <Grid
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-end"
          xs={4}
        >
          <Tooltip title="Modify">
            <Button
              variant="outlined"
              size="medium"
              color="secondary"
              className={classes.button}
            >
              Modify
            </Button>
          </Tooltip>
          <Tooltip title="Export">
            <Button
              variant="outlined"
              size="medium"
              color="secondary"
              className={classes.button}
            >
              Export
            </Button>
          </Tooltip>
        </Grid>
        <CustomerAR classes={classes} card={card} />
      </Grid>
    );
  }
}

export default withStyles(styles)(CustomerHeader);
