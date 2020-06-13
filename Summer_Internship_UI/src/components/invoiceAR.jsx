import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import InvoiceARCard from "./invoiceARCard";

class InvoiceAR extends Component {
  state = {};
  render() {
    const { classes, card } = this.props;

    return (
      <Grid container justify="space-between">
        <InvoiceARCard title={"Total Customer"} value={"2091"} classes={classes} card={card} />
        <InvoiceARCard title={"Total Open AR"} value={"$43M"} classes={classes} card={card} />
        <InvoiceARCard title={"Total Open AR"} value={"3 Days"} classes={classes} card={card} />
        <InvoiceARCard title={"Total Open Invoices"} value={"37438"} classes={classes} card={card} />
      </Grid>
    );
  }
}

export default InvoiceAR;
