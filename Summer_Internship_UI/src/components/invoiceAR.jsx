import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import InvoiceARCard from "./invoiceARCard";
import { formatter } from "../utils/formatter";

class InvoiceAR extends Component {
  state = {};
  render() {
    const { classes, card, stats } = this.props;

    const fStats = {
      total_customer: formatter(stats.total_customer),
      total_open_AR: "$" + formatter(stats.total_open_AR),
      average_days_delay: stats.average_days_delay + " Days",
      total_open_invoices: formatter(stats.total_open_invoices),
    };

    return (
      <Grid container justify="space-between">
        <InvoiceARCard
          title={"Total Customer"}
          value={fStats.total_customer}
          classes={classes}
          card={card}
          autoid="total-customers-text-collector"
        />
        <InvoiceARCard
          title={"Total Open AR"}
          value={fStats.total_open_AR}
          classes={classes}
          card={card}
          autoid="total-open-ar-text-collector"
        />
        <InvoiceARCard
          title={"Average Days Delay"}
          value={fStats.average_days_delay}
          classes={classes}
          card={card}
          autoid="average-days-delay-text-collector"
        />
        <InvoiceARCard
          title={"Total Open Invoices"}
          value={fStats.total_open_invoices}
          classes={classes}
          card={card}
          autoid="total-open-invoice-text-collector"
        />
      </Grid>
    );
  }
}

export default InvoiceAR;
