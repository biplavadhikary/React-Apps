import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LeftBar from "./leftBar";
import InvoiceTable from "./invoiceTable";

class MainContent extends Component {

  render() {
    const {
      card,
      classes,
      raiseCustomerDetails,
      raiseCustomerTable,
      raisePredict,
      customers,
      invoices,
    } = this.props;

    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={8}
      >
        <LeftBar
          card={card}
          customers={customers}
          classes={classes}
          raiseCustomerTable={raiseCustomerTable}
        />
        <InvoiceTable
          invoices={invoices}
          autoid="invoice-table-collector"
          classes={classes}
          card={card}
          // raiseCustomerDetails={raiseCustomerDetails}
          raisePredict={raisePredict}
        />
      </Grid>
    );
  }
}

export default MainContent;
