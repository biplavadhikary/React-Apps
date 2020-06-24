import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CustomerARCard from "./common/customerARCard"
import { formatter } from "../utils/formatter"

class CustomerAR extends Component {
  render() {
    const { classes, card, stats } = this.props;

    const fStats = {
      total_open_AR: "$" + formatter(stats.total_open_AR),
      total_open_invoices: formatter(stats.total_open_invoices)
    }

    return (
      <Grid
        item
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
        xs={8} sm={4}
      >
        <CustomerARCard value={fStats.total_open_invoices} title={"Open Invoices"} classes={classes} card={card}/>
        <CustomerARCard value={fStats.total_open_AR} title={"Total Open Amount"} classes={classes} card={card}/>
      </Grid>
    );
  }
}

export default CustomerAR;
