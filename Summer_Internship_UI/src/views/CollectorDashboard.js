import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/Footer";
import { dashboardStyle } from "../utils/styles";
import { callInvoiceAPI, callCustomerAPI } from "../services/services";
import InvoiceAR from "../components/invoiceAR";
import Header from "../components/header";
import MainContent from "../components/mainContent";
import { Redirect } from "react-router-dom";
// import theme, { pxToVh } from "../utils/theme";
// import { InputBase, TextField, OutlinedInput } from "@material-ui/core";
// import { Button, Typography } from "@material-ui/core";

// styles is already defined by MUI, we're are just adding a few more optional style attributes
const styles = dashboardStyle;

class CollectorDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //name: "",
      selectedCustomerName: "",
      selectedCustomerTable: "all",
      redirect: false,
      loading: false,
      customers: [],
      invoices: { list: [], count: 0 },
    };
  }

  componentDidMount() {
    callCustomerAPI().then((response) => {
      this.setState({
        customers: response.data,
      });
    });

    callInvoiceAPI(this.state.selectedCustomerTable).then((response) => {
      this.setState({
        invoices: {
          list: response.data.invoiceList,
          count: response.data.totalCount,
        },
      });
      //console.log(this.state.invoices);
    });
  }

  redirectToCustomerDetails = (custName) => {
    //console.log("Called for Redirect by ", custName);
    this.setState({ redirect: true, selectedCustomerName: custName });
  };

  handleCustomerTable = (customerNumber) => {
    this.setState(
      {
        selectedCustomerTable: customerNumber.toString(),
      },
      () => {
        callInvoiceAPI(this.state.selectedCustomerTable).then((response) => {
          this.setState({
            invoices: {
              list: response.data.invoiceList,
              count: response.data.totalCount,
            },
          });
          //console.log(this.state.invoices);
        });
      }
    );
  };

  render() {
    const { classes } = this.props;
    const card = {
      padding: "5vh 1vw",
      margin: "0.5vw",
      flex: "1",
      backgroundColor: "#252C48",
      borderRadius: "5px",
    };

    return (
      <Grid container className={classes.root} spacing={8}>
        <Header />
        <InvoiceAR classes={classes} card={card} />
        <MainContent
          invoices={this.state.invoices}
          customers={this.state.customers}
          classes={classes}
          card={card}
          raiseCustomerDetails={this.redirectToCustomerDetails}
          raiseCustomerTable={this.handleCustomerTable}
        />
        <Footer />

        {this.state.redirect === true && (
          <Redirect
            to={{
              pathname: "/customer-dashboard",
              state: {
                customer: this.state.selectedCustomerName,
                invoices: this.state.invoices,
              },
            }}
          />
        )}
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CollectorDashboard);
