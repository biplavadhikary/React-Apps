import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import EnhancedTable from "./mTable";
import Grow from "@material-ui/core/Grow";
import LoaderCustomized from "./loaderCustomized";

class InvoiceTable extends Component {
  render() {
    const {
      card,
      classes,
      invoices,
      loading,
      enableToolbar,
      // raiseCustomerDetails,
      notifySelected,
      raisePredict,
      tableHeight,
    } = this.props;

    //console.log("Calling from Table",invoices);

    let content;

    if (loading === true) content = <LoaderCustomized classes={classes} />;
    else 
      content = (
        <EnhancedTable
          data={invoices}
          classes={classes}
          // raiseCustomerDetails={raiseCustomerDetails}
          enableToolbar={enableToolbar}
          notifySelected={notifySelected}
          raisePredict={raisePredict}
          tableHeight={tableHeight}
        />
      );

    return (
      <Grow in={true}>
        <Grid
          item
          xs={12}
          s={8}
          style={{ ...card, height: "60vh", overflow: "auto", padding: "0" }}
        >
          {content}
        </Grid>
      </Grow>
    );
  }
}

export default InvoiceTable;
