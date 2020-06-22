import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";

const searchBasis = [
  { label: "Equal to ==", value: "=" },
  { label: "Not Equal to !=", value: "!=" },
  { label: "Less than Equal to <=", value: "<=" },
  { label: "Less than <", value: "<" },
  { label: "Greater than Equal to >=", value: ">=" },
  { label: "Greater than >", value: ">" },
];

const styles = (theme) => ({
  nameInput: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  whiteColor: {
    color: "white",
  },
  underline: {
    borderBottom: "1px solid #3e9eed",
    "&:after": {
      borderBottom: "1px solid #3e9eed",
    },
  },
});

class SearchAdvanced extends Component {
  state = {
    advancedOperation: ">=",
    amount: "10000",
  };

  handleChange = (prop) => (event) => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes, raiseAdvancedSearch, turnOffAdvancedSearch } = this.props;

    return (
      <Grid
        container
        item
        alignItems="flex-start"
        style={{ padding: "5px 25px 30px 25px" }}
        spacing={16}
        xs={12}
      >
        <Grid item xs={12}>
          <Typography className={classes.textStyle1}>
            Advanced Search
          </Typography>
        </Grid>

        {/* DropDown */}
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            value={this.state.advancedOperation}
            className={classes.textField}
            onChange={this.handleChange("advancedOperation")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography className={classes.textStyle1}>
                    Amount&nbsp;is&nbsp;&nbsp;&nbsp;|
                  </Typography>
                </InputAdornment>
              ),
              classes: {
                underline: classes.underline,
              },
            }}
            SelectProps={{
              className: {
                root: {
                  color: "red",
                },
                "&:before": {
                  borderColor: "red",
                },
              },
            }}
          >
            {searchBasis.map((item) => (
              <MenuItem key={item.label} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Amount */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            className={classes.textField}
            type="number"
            autoid="advance-search-open-amount"
            value={this.state.amount}
            onChange={(e) => {
              this.setState({ amount: e.target.value });
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography className={classes.textStyle1}>
                    Open&nbsp;Amt.&nbsp;&nbsp;|
                  </Typography>
                </InputAdornment>
              ),
              classes: {
                underline: classes.underline,
              },
            }}
          ></TextField>
        </Grid>

        {/* Buttons */}
        <Grid item container xs={12} justify="flex-end" spacing={16}>
          <Grid item>
            <Button
              onClick={turnOffAdvancedSearch}
              variant="outlined"
              size="small"
              color="secondary"
              className={classes.button}
              autoid="advance-search-cancel"
            >
              Close
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={() => {
                raiseAdvancedSearch(
                  this.state.advancedOperation,
                  this.state.amount
                );
                turnOffAdvancedSearch(this.state.advancedOperation, this.state.amount);
              }}
              variant="contained"
              size="small"
              color="secondary"
              className={classes.button}
              autoid="advance-search-button"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

SearchAdvanced.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAdvanced);
