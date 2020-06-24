import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LeftBar from "./leftBar";
import InvoiceTable from "./common/invoiceTable";

class MainContent extends Component {

  render() {
    const {
      card,
      classes,
      loading,
      //raiseCustomerDetails,
      raiseCustomerTable,
      raisePredict,
      customers,
      invoices,
      raiseAdvancedSearch
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
          raiseAdvancedSearch={raiseAdvancedSearch}
        />
        <InvoiceTable
          invoices={invoices}
          autoid="invoice-table-collector"
          classes={classes}
          card={card}
          // raiseCustomerDetails={raiseCustomerDetails}
          raisePredict={raisePredict}
          loading={loading}
        />
      </Grid>
    );
  }
}

export default MainContent;
