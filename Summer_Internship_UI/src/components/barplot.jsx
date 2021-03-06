import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    height: "32vh",
  },
});

class Barplot extends Component {
  render() {
    const { classes, customers, raiseCustomerTable, items } = this.props;
    // const sortedCustomers = customers.sort(
    //   (c1, c2) => c2.total_open_amount - c1.total_open_amount
    // );

    return (
      <HighchartsReact
        className={classes.root}
        highcharts={Highcharts}
        autoid="companycode-chart"
        options={this.getOptions(
          customers,
          this.getCategories,
          this.getData,
          raiseCustomerTable, 
          items
        )}
      />
    );
  }

  getCategories = (customers) => {
    return customers.length !== 0
      ? customers.map((customer) => customer.business_code)
      : [];
  };

  getData = (customers) => {
    return customers.length !== 0
      ? customers.map((customer) => customer.total_open_amount)
      : [];
  };

  getOptions = (customers, getCategories, getData, raiseCustomerTable, items) => {
    //console.log("Got items: ", items)
    return {
      chart: {
        backgroundColor: "transparent",
        type: "bar",
        zoomType: "xy",
        height: 25*items + 200,
      },

      title: {
        text: "Total Amount by Company Code",
        style: {
          color: "#FFFFFFA6",
          fontWeight: "bold",
          fontSize: 14,
          fontFamily: "Trebuchet MS, Verdana, sans-serif",
        },
        align: "left",
      },

      subtitle: {
        style: {
          color: "grey",
          font: 'bold 12px "Trebuchet MS", Verdana, sans-serif',
        },
      },

      legend: {
        itemStyle: {
          color: "silver",
        },
        itemHoverStyle: {
          color: "gray",
        },
        enabled: false,
      },

      colors: ["#ababab"],

      series: [
        {
          name: "Total Open Amount",
          data: getData(customers),
          states: {
            select: {
              color: "#5da6d4",
            },
          },
          borderWidth: 0,
          pointWidth: 20,
          // pointPadding: 40,
          // groupPadding: 10
        },
      ],

      xAxis: {
        title: {},
        categories: getCategories(customers),
        labels: {
          style: {
            color: "#cfcfcf",
          },
        },
        lineColor: "transparent",
        startOnTick: true,
        endOnTick: true,
      },

      yAxis: {
        title: {
          text: "Total Amount",
          style: {
            color: "white",
          },
        },
        labels: {
          style: {
            color: "#cfcfcf",
          },
        },
        gridLineWidth: 0,
        minRange: 0.1,
      },

      credits: {
        enabled: false,
      },

      tooltip: {
        animation: true,
        enabled: false,
      },

      plotOptions: {
        series: {
          point: {
            events: {
              click: function () {
                this.select(null, false);
                if (this.selected === true) {
                  const selectedBsCode = this.series.chart.getSelectedPoints()[0]
                    .category;
                  const selectedCustomer = customers.find(
                    (customer) => customer.business_code === selectedBsCode
                  );
                  raiseCustomerTable(
                    selectedCustomer.customer_number,
                    selectedCustomer.name_of_customer,
                    false
                  );
                } else {
                  raiseCustomerTable("all", "all", false);
                }
              },
            },
          },
          minPointLength: 10,
        },
      },
    };
  };
}

export default withStyles(styles)(Barplot);
