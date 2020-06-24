import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  root: {
    width: "92%",
    margin: "0",
    background: "transparent",
    overflowX: "auto",
  },
  table: {
    minWidth: 200,
  },
  cell: {
    fontSize: "10pt",
    height: "auto !important",
  },
  row: {
    height: 25,
    cursor: "pointer",
  },
  capitalize: {},
});

class SimpleTable extends Component {
  getRowData = (rows, classes, raiseEvent) => {
    if (rows === undefined || rows.length === 0) return null;
    else {
      return rows.map((row) => (
        <TableRow
          key={row.customer_number}
          className={classes.row}
          onClick={() => raiseEvent(row.customer_number, row.name_of_customer)}
        >
          <TableCell
            className={classes.cell + " capitalize"}
            component="th"
            scope="row"
            autoid="customer-name"
          >
            {row.name_of_customer}
          </TableCell>
          <TableCell align="right" className={classes.cell} autoid="customer-number">
            {row.customer_number}
          </TableCell>
          <TableCell align="right" className={classes.cell}>
            {row.total_open_amount}
          </TableCell>
        </TableRow>
      ));
    }
  };

  render() {
    const { classes, data: rows, raiseCustomerTable } = this.props;
    //console.log("Customer List: ", rows)

    return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow className={classes.row}>
                <TableCell className={classes.cell}>Customer Name</TableCell>
                <TableCell align="right" className={classes.cell}>
                  Number
                </TableCell>
                <TableCell align="right" className={classes.cell}>
                  Open Amt
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.getRowData(rows, classes, raiseCustomerTable)}
            </TableBody>
          </Table>
        </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
