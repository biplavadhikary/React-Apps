import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./searchBar";
import SimpleTable from "./simpleTable";
import Barplot from "./barplot";
import Zoom from "@material-ui/core/Zoom";

class LeftBar extends Component {
  state = {
    searchVal: "",
  };

  addAllCustomerObject = (customers) => {
    const all = {
      customer_name: "All",
      customer_number: "All",
      total_open_amount: "-",
    };
    return [all, ...customers];
  };

  handleSearch = (e) => {
    //console.log(e.target.value);
    this.setState({ searchVal: e.target.value });
  };

  render() {
    const { card, classes, customers, raiseCustomerTable } = this.props;
    const { searchVal } = this.state;

    const customersAll = this.addAllCustomerObject(customers);

    let filteredData = customersAll.filter(
      (customer) =>
        customer["customer_name"].toLowerCase().indexOf(searchVal) !== -1 ||
        customer["customer_number"].toString().indexOf(searchVal) !== -1 ||
        customer["total_open_amount"].toString().indexOf(searchVal) !== -1
    );
    //console.log("Filtered Data: ", filteredData);

    return (
      <Grid
        container
        item
        xs={12}
        sm={4}
        direction="column"
        style={{ height: "64vh" }}
      >
        <Zoom in={true}>
          <Grid
            xs={12}
            style={{ ...card, padding: "10px 20px", overflow: "scroll" }}
            item
          >
            <Barplot
              classes={classes}
              customers={customers}
              raiseCustomerTable={raiseCustomerTable}
            />
          </Grid>
        </Zoom>
        <Zoom in={true}>
          <Grid
            style={{ ...card, overflow: "scroll", padding: "0" }}
            xs={12}
            item
          >
            <SearchBar raiseSearch={this.handleSearch} />
            <SimpleTable
              data={filteredData}
              classes={classes}
              raiseCustomerTable={raiseCustomerTable}
            />
          </Grid>
        </Zoom>
      </Grid>
    );
  }
}

export default LeftBar;
