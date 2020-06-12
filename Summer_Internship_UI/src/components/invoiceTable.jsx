import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
//import GeneralTable from "./generalTable"
import EnhancedTable from "./mTable";

class InvoiceTable extends Component {
  render() {
    const { card, classes, invoices, raiseCustomerDetails } = this.props;
    //console.log("Calling from Table",invoices);

    return (
      <Grid item xs={12} s={8} style={{ ...card, height: "60vh", overflow: "scroll", padding: "0" }}>
        <EnhancedTable
          data={invoices.list}
          classes={classes}
          raiseCustomerDetails={raiseCustomerDetails}
        />
      </Grid>
    );
  }
}

export default InvoiceTable;
