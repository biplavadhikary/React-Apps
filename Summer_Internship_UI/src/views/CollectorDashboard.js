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
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { store } from "../index";
import * as actions from "../actions/actionTypes";
// import theme, { pxToVh } from "../utils/theme";

// styles is already defined by MUI, we're are just adding a few more optional style attributes
const styles = dashboardStyle;

class CollectorDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //name: "",
      redirect: false,
      loading: false,
      invoices: [],
      customers: [],
      invoiceStats: {
        total_customer: 0,
        total_open_AR: 0,
        average_days_delay: 0,
        total_open_invoices: 0,
      },
      selectedCustomerName: "all",
      selectedCustomerId: "all",
      selectedCustomerStats: {
        total_open_invoices: 0,
        total_open_AR: 0,
      },
    };
  }

  componentDidMount() {
    if (this.state.customers.length === 0) {
      callCustomerAPI().then((response) => {
        this.setState({
          customers: response.data,
        });
      });
    }

    if (this.state.invoices.length === 0) {
      callInvoiceAPI(this.state.selectedCustomerId).then((response) => {
        this.setState({
          invoices: response.data.invoiceList,
          invoiceStats: response.data.stats,

          // when no customer is selected
          selectedCustomerStats: {
            total_open_invoices: response.data.stats.total_open_invoices,
            total_open_AR: response.data.stats.total_open_AR,
          },
        });
        //console.log(this.state.invoices);
      });
    }
  }

  redirectToCustomerDetails = (custName) => {
    //console.log("Called for Redirect by ", custName);
    if (this.state.selectedCustomerId === "all")
      this.setState({ redirect: true });
    else this.setState({ redirect: true, selectedCustomerName: custName });
  };

  handleCustomerTable = (customerNumber) => {
    this.setState(
      {
        selectedCustomerId: customerNumber.toString(),
      },
      () => {
        callInvoiceAPI(this.state.selectedCustomerId).then((response) => {
          this.setState({
            invoices: response.data.invoiceList,
            selectedCustomerStats: {
              total_open_invoices: response.data.stats.total_open_invoices,
              total_open_AR: response.data.stats.total_open_AR,
            },
          });
          //console.log(this.state.invoices);
        });
      }
    );
  };

  render() {
    const { classes } = this.props;
    const { invoiceStats } = this.state;

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
        <InvoiceAR classes={classes} card={card} stats={invoiceStats} />
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
                stats: this.state.selectedCustomerStats,
              },
            }}
          />
        )}
      </Grid>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     dashboardData: state.dashboardData,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     updateDashboard: (data) => { 
//       dispatch({ type: actions.UPDATE_DASHBOARD, data: data})
//     }
//   }
// }

export default /*connect(mapStateToProps, mapDispatchToProps)*/(
  withStyles(styles, { withTheme: true })(CollectorDashboard)
);
