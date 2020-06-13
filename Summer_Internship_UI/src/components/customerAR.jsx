import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CustomerARCard from "./customerARCard"

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
        <CustomerARCard value={"1323"} title={"Open Invoices"} classes={classes} card={card}/>
        <CustomerARCard value={"$980K"} title={"Total Open Amount"} classes={classes} card={card}/>
      </Grid>
    );
  }
}

export default CustomerAR;
