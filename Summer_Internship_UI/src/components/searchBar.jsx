import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
  cssLabel: {
    color: "silver",

    '&$cssFocused': {
      color: 'cyan',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: "cyan",
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: "lightblue",
    },
  },
  notchedOutline: {},
});

class SearchBar extends Component {
  render() {
    const { classes, raiseSearch } = this.props;

    return (
      <TextField
        id="filled-search"
        label="Search by Customer Name/Number/Amt"
        type="search"
        className={classes.textField}
        margin="dense"
        variant="outlined"
        autoComplete="on"
        style={{ width: "96%" }}
        onChange={raiseSearch}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
