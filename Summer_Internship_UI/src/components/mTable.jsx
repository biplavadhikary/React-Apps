import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import theme from "../utils/theme";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

class EnhancedTableHead extends Component {
  createSortHandler = (property) => (event) => {
    this.props.onRequestSort(event, property);
  };

  getKeys = (items) => {
    return items && items.length ? Object.keys(items[0]) : null;
  };

  getHeader = (items, order, orderBy) => {
    const keys = this.getKeys(items);
    //console.log("Keys are: ", keys);
    if (keys === null) return null;

    return keys.map((key) => {
      return (
        <TableCell
          key={key}
          align="right"
          padding="default"
          sortDirection={orderBy === key ? order : false}
        >
          <Tooltip title="Sort" placement="bottom-end" enterDelay={300}>
            <TableSortLabel
              active={orderBy === key}
              direction={order}
              onClick={this.createSortHandler(key)}
            >
              {key.replace(/_/g, "\xa0")}
            </TableSortLabel>
          </Tooltip>
        </TableCell>
      );
    });
  };

  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      data,
    } = this.props;

    return (
      <TableHead>
        <TableRow className="capitalize">
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {this.getHeader(data, order, orderBy)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = (theme) => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  spacer: {
    flex: "1 1 100%",
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: "0 0 auto",
  },
});

let EnhancedTableToolbar = (props) => {
  const { numSelected, classes, selectedItems, raisePredict } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            Invoices
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        <Tooltip title="Predict">
          <Button
            variant="outlined"
            size="medium"
            color="secondary"
            autoid="predict-button"
            className={classes.button}
            disabled={numSelected > 0 ? false : true}
            onClick={() => raisePredict(selectedItems)}
          >
            Predict
          </Button>
        </Tooltip>
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = (theme) => ({
  root: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
  },
  table: {
    backgroundColor: "#1B1F38",
    color: "white",
  },
  tableWrapper: {
    overflowX: "scroll",
    overflowY: "scroll",
    borderRadius: 5,
  },
  tablePagination: {},
  tablePaginationCaption: {
    color: "#fff",
  },
  tablePaginationSelectIcon: {
    color: "#fff",
  },
  tablePaginationSelect: {
    color: "#fff",
  },
  tablePaginationActions: {
    color: "#fff",
  },
});

class EnhancedTable extends Component {
  state = {
    order: "asc",
    orderBy: "calories",
    selected: [],
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event, notifySelected) => {
    if (event.target.checked) {
      this.setState(
        (state) => ({
          selected: this.props.data.map((n) => n.pk_id),
        }),
        () => {
          if (notifySelected !== undefined) notifySelected(this.state.selected);
        }
      );
      return;
    }
    this.setState({ selected: [] }, () => {
      if (notifySelected !== undefined) notifySelected(this.state.selected);
    });
  };

  handleClick = (event, id, notifySelected) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected }, () => {
      if (notifySelected !== undefined) notifySelected(this.state.selected);
    });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = (id) => this.state.selected.indexOf(id) !== -1;

  getRow = (row/*, raiseCustomerDetails*/) => {
    if (row === null) return null;

    return Object.keys(row).map((key) => (
      <TableCell
        key={key}
        align="right"
        /*onClick={() => raiseCustomerDetails(row["customer_name"])}*/
      >
        {row[key]}
      </TableCell>
    ));
  };

  shouldRenderToolbar = (enable, selected, raisePredict) => {
    if (enable === undefined || enable === true)
      return (
        <EnhancedTableToolbar
          numSelected={selected.length}
          selectedItems={selected}
          raisePredict={raisePredict}
        />
      );
    else return null;
  };

  render() {
    const {
      classes,
      data,
      enableToolbar,
      /*raiseCustomerDetails,*/
      notifySelected,
      tableHeight,
      raisePredict,
    } = this.props;
    
    const { order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        {this.shouldRenderToolbar(enableToolbar, selected, raisePredict)}
        <div
          className={classes.tableWrapper}
          style={{ height: tableHeight || "40vh" }}
        >
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            dense="true"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={(event) =>
                this.handleSelectAllClick(event, notifySelected)
              }
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
              data={data}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const isSelected = this.isSelected(row.pk_id);
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={row.pk_id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isSelected}
                          onClick={(event) =>
                            this.handleClick(event, row.pk_id, notifySelected)
                          }
                        />
                      </TableCell>
                      {this.getRow(row/*, raiseCustomerDetails*/)}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          autoid="invoice-table-pagination-collector"
          backIconButtonProps={{
            "aria-label": "Previous Page",
            "autoid": "pagination-button-previous-collector"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page",
            "autoid": "pagination-button-next-collector"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          classes={{
            root: classes.tablePagination,
            caption: classes.tablePaginationCaption,
            selectIcon: classes.tablePaginationSelectIcon,
            select: classes.tablePaginationSelect,
            actions: classes.tablePaginationActions,
          }}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
