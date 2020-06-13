import React, { Component } from "react";
import Header from "../components/header";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/Footer";
import { customerDetailsTheme } from "../utils/styles";
import { Typography, Button } from "@material-ui/core";
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
    this.state = {};
  }

  componentDidMount() {}

  handleCustomerUpdate = (custname) => {
    console.log("You clicked on Customer: ", custname);
  };

  render() {
    const { customer } = this.props.location.state || {};
    const { invoices } = this.props.location.state;
    const { classes } = this.props;
    //console.log("Invoices in CustomerDetails: ", invoices);

    return (
      <Grid container className={classes.root} spacing={8}>
        <Header title={customer} back={true} />
        <Grid
          container
          direction="column"
          style={{ ...card, marginTop: 20, paddingTop: 5, height: "80vh" }}
        >
          <CustomerHeader card={card} classes={classes} />
          <InvoiceTable
            invoices={invoices}
            classes={classes}
            card={card}
            enableToolbar={false}
            raiseCustomerDetails={this.handleCustomerUpdate}
          />
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CustomerDetails);
