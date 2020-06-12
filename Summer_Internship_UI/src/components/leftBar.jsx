import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./searchBar";
import SimpleTable from "./simpleTable";

class LeftBar extends Component {
  state = {
    searchVal: "",
  };

  handleSearch = (e) => {
    //console.log(e.target.value);
    this.setState({ searchVal: e.target.value });
  };

  render() {
    const { card, classes, customers, raiseCustomerTable } = this.props;
    const { searchVal } = this.state;

    let filteredData = customers.filter(
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
        <Grid style={{ ...card, padding: "0" }} xs={12} item></Grid>
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
      </Grid>
    );
  }
}

export default LeftBar;
