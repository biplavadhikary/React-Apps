import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import EnhancedTable from "./mTable";
import Grow from "@material-ui/core/Grow";

class InvoiceTable extends Component {
  render() {
    const { card, classes, invoices, enableToolbar, raiseCustomerDetails } = this.props;
    //console.log("Calling from Table",invoices);

    return (
      <Grow in={true}>
      <Grid
        item
        xs={12}
        s={8}
        style={{ ...card, height: "60vh", overflow: "scroll", padding: "0" }}
      >
        
        <EnhancedTable
          data={invoices.list}
          classes={classes}
          raiseCustomerDetails={raiseCustomerDetails}
          enableToolbar={enableToolbar}
        />
      </Grid>
      </Grow>
    );
  }
}

export default InvoiceTable;
