import React, { Component } from "react";
import Highcharts from "highcharts";
import Paper from "@material-ui/core/Paper";
import HighchartsReact from "highcharts-react-official";
import { withStyles } from "@material-ui/core/styles";
import theme from "../utils/theme";

const styles = (theme) => ({
  root: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    height: "32vh",
  },
});

const options = {
  chart: {
    backgroundColor: "transparent",
    type: "bar",
    zoomType: "xy",
  },

  colors: [
    "#058DC7",
    "#50B432",
    "#ED561B",
    "#DDDF00",
    "#24CBE5",
    "#64E572",
    "#FF9655",
    "#FFF263",
    "#6AF9C4",
  ],

  title: {
      text: "Customers",
    style: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: "12px",
      fontFamily: "Trebuchet MS, Verdana, sans-serif",
    },
  },

  subtitle: {
    style: {
      color: "grey",
      font: 'bold 12px "Trebuchet MS", Verdana, sans-serif',
    },
  },

  legend: {
    itemStyle: {
      font: "9pt Trebuchet MS, Verdana, sans-serif",
      color: "silver",
    },
    itemHoverStyle: {
      color: "gray",
    },
  },

  series: [
    {
      name: "Profit",
      data: [100, 200, 30, 10, 80, 45, 50],
    },
  ],

  xAxis: {
    title: {
        text: "Name"
    }
},

  yAxis: {
      title: {
          text: "Total Amount"
      }
  },

  credits: {
      enabled: false
  }

};

class Barplot extends Component {
  render() {
    const classes = this.props;

    return (
      <HighchartsReact
        className={classes.root}
        highcharts={Highcharts}
        options={options}
      />
    );
  }
}

export default withStyles(styles)(Barplot);
