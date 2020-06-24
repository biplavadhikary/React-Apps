import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/common/Footer";
import { dashboardStyle } from "../utils/styles";
import {
  callInvoiceAPI,
  callCustomerAPI,
  callPredictionAPI,
} from "../services/services";
import InvoiceAR from "../components/invoiceAR";
import Header from "../components/header";
import MainContent from "../components/mainContent";
import { Redirect } from "react-router-dom";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { store } from "../index";
// import * as actions from "../actions/actionTypes";
// import theme, { pxToVh } from "../utils/theme";

// styles is already defined by MUI, we're are just adding a few more optional style attributes
const styles = dashboardStyle;

class CollectorDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      loading: true,
      invoices: [],
      customers: [],
      invoiceStats: {
        total_customer: 0,
        total_open_AR: 0,
        average_days_delay: 0,
        total_open_invoices: 0,
      },
      selectedCustomerName: "all customers",
      selectedCustomerId: "all",
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
          loading: false
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

  handleAdvancedSearch = (op, amt) => {
    //console.log("Your advanced search options are: ", op, amt)
    if (amt === "") {
      alert("Amount cannot be Empty!"); 
      return;
    }

    callInvoiceAPI("all", op, amt).then(response => {
      this.setState({ invoices: response.data.invoiceList })
    })
  }

  updateDashboardData = (customerNumber, customerName, shouldRedirect) => {
    this.setState(
      {
        selectedCustomerId: customerNumber.toString(),
        selectedCustomerName: customerName,
      },
      () => {
        callInvoiceAPI(this.state.selectedCustomerId).then((response) => {
          this.setState(
            {
              invoices: response.data.invoiceList,
              invoiceStats: response.data.stats,
            },
            () => {
              //console.log("Should Redirect is: ", shouldRedirect)
              if (shouldRedirect === true || shouldRedirect === undefined)
                this.redirectToCustomerDetails(this.state.selectedCustomerName);
            }
          );
          //console.log(this.state.invoices);
        });
      }
    );
  };

  handlePredict = (selectedItems) => {
    const invoicesForPrediction = this.state.invoices.filter((item) =>
      selectedItems.includes(item.pk_id)
    );
    // console.log("Predictions Called for Invoices: ", invoicesForPrediction);

    callPredictionAPI(invoicesForPrediction)
      .then((response) => {
        const predictedInvoices = response.data;

        const newInvoices = this.state.invoices.map((item) => {
          const newItem = predictedInvoices.filter(
            (el) => el["Pk Id"] === item.pk_id
          );
          if (newItem[0] !== undefined) {
            return {
              ...item,
              predicted_amount: newItem[0]["First Payment (Predicted)"],
              predicted_payment_type: newItem[0]["Payment Type"],
            };
          } else {
            return item;
          }
        });
        //console.log(newInvoices)
        this.setState({ invoices: newInvoices });
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    const { classes } = this.props;
    const { invoiceStats, selectedCustomerName, loading } = this.state;

    const card = {
      padding: "5vh 1vw",
      margin: "0.5vw",
      flex: "1",
      backgroundColor: "#252C48",
      borderRadius: "5px",
    };

    return (
      <Grid container className={classes.root} spacing={8}>
        <Header title={selectedCustomerName} classes={classes} />
        <InvoiceAR classes={classes} card={card} stats={invoiceStats} />
        <MainContent
          invoices={this.state.invoices}
          customers={this.state.customers}
          classes={classes}
          card={card}
          loading={loading}
          raiseCustomerDetails={this.redirectToCustomerDetails}
          raiseCustomerTable={this.updateDashboardData}
          raisePredict={this.handlePredict}
          raiseAdvancedSearch={this.handleAdvancedSearch}
        />
        <Footer />

        {this.state.redirect === true && (
          <Redirect
            to={{
              pathname: "/customer-dashboard",
              state: {
                customer: this.state.selectedCustomerName,
                invoices: this.state.invoices,
                stats: {
                  total_open_invoices: invoiceStats.total_open_invoices,
                  total_open_AR: invoiceStats.total_open_AR,
                },
                //this.state.selectedCustomerStats,
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

export default /*connect(mapStateToProps, mapDispatchToProps)*/ withStyles(
  styles,
  { withTheme: true }
)(CollectorDashboard);
