import React, { Component } from "react";
import Header from "../components/header";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/Footer";
import { customerDetailsTheme } from "../utils/styles";
import CustomerHeader from "../components/customerHeader";
import InvoiceTable from "../components/invoiceTable";

const styles = customerDetailsTheme;

const card = {
  padding: "1vh 1vw",
  margin: "0.5vw",
  flex: "1",
  backgroundColor: "#252C48",
  borderRadius: "5px",
};

class CustomerDetails extends Component {
  constructor(props) {
    super(props);

    if (this.props.location.state !== undefined) {
      const specifiedColInvoices = this.props.location.state.invoices.map(
        ({ predicted_payment_type, predicted_amount, ...item }) => item
      );
      this.state = {
        customer: this.props.location.state.customer || {},
        invoices: specifiedColInvoices,
        stats: this.props.location.state.stats,
        selected: [],
      };
    } else {
      this.state = {
        customer: "Not Selected",
        invoices: [],
        stats: {
          total_open_invoices: 0,
          total_open_AR: 0,
        },
        selected: [],
      };
    }
  }

  handleCustomerUpdate = (custname) => {
    console.log("You clicked on Customer: ", custname);
  };

  updateSelected = (selectedIds) => {
    this.setState({ selected: selectedIds });
  };

  handleModify = (dtypeVal, omtVal) => {
    const pk_id = this.state.selected[0];
    const updatedInvoices = this.state.invoices;

    let indexToModify = updatedInvoices.findIndex(
      (entry) => entry.pk_id === pk_id
    );
    // console.log("Before Modification: ", updatedInvoices[indexToModify].doctype, updatedInvoices[indexToModify].total_open_amount);
    if (dtypeVal !== null) updatedInvoices[indexToModify].doctype = dtypeVal;
    if (omtVal !== null)
      updatedInvoices[indexToModify].total_open_amount = parseFloat(omtVal);
    // console.log("After Modification: ", updatedInvoices[indexToModify].doctype, updatedInvoices[indexToModify].total_open_amount);
    this.setState({ invoices: updatedInvoices });
  };

  render() {
    const { customer, invoices, stats, selected } = this.state;
    const { classes } = this.props;
    //console.log("Invoices in CustomerDetails: ", invoices);

    return (
      <Grid container className={classes.root} spacing={8}>
        <Header title={customer} back={true} />
        <Grid
          container
          direction="column"
          style={{ ...card, marginTop: 10, paddingTop: 5, height: "80vh" }}
        >
          <CustomerHeader
            card={card}
            classes={classes}
            stats={stats}
            data={invoices}
            selected={selected}
            raiseModification={this.handleModify}
            filenamePostfix={customer}
          />
          <InvoiceTable
            invoices={invoices}
            classes={classes}
            card={card}
            enableToolbar={false}
            raiseCustomerDetails={this.handleCustomerUpdate}
            notifySelected={this.updateSelected}
          />
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CustomerDetails);
