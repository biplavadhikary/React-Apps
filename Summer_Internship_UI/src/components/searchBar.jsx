import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import searchIcon from "../assets/mag-glass.svg";
import moneyIcon from "../assets/attach_money.svg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchAdvanced from "./searchAdvanced";
import Collapse from '@material-ui/core/Collapse';

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
    fontSize: 12,

    "&$cssFocused": {
      color: "cyan",
    },
  },
  cssFocused: {},

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "silver !important",
    },
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#5DAAE0 !important",
    borderRadius: 50,
  },
});

class SearchBar extends Component {
  state = {
    searchBarValue: "",
    advancedSearchOn: false,
    advancedOperation: ">=",
    amount: "10000",
  };

  setSearchBarContentAndRaise = (e, raiseSearch) => {
    this.setState({ searchBarValue: e.target.value })
    raiseSearch(e)
  }

  turnOffAdvancedSearch = (op, amt) => {
    const searchString = "Customers with " + op + " $" + amt + " Open Amount";
    this.setState({ advancedSearchOn: false, searchBarValue: searchString });
  };

  shouldAdvanceSearchRender = (
    classes,
    raiseAdvancedSearch,
    turnOffAdvancedSearch
  ) => {
    if (this.state.advancedSearchOn === true) {
      return (
        <Collapse in={this.state.advancedSearchOn} timeout={3000}>
          <SearchAdvanced
            classes={classes}
            raiseAdvancedSearch={raiseAdvancedSearch}
            turnOffAdvancedSearch={turnOffAdvancedSearch}
            autoid="advance-search-table"
          />
        </Collapse>
      );
    }
  };

  render() {
    const { classes, raiseSearch, raiseAdvancedSearch } = this.props;

    return (
      <React.Fragment>
        <Grid container alignItems="center" style={{ padding: 10 }}>
          <Grid item xs={1}>
            <Icon>
              <img
                src={searchIcon}
                alt="S"
                style={{ width: "80%", float: "right" }}
                autoid="search-icon"
              />
            </Icon>
          </Grid>
          <Grid item xs={11}>
            <TextField
              id="filled-search"
              label="Search"
              type="search"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              autoComplete="on"
              style={{ width: "94%" }}
              value={this.state.searchBarValue}
              onChange={(e) => this.setSearchBarContentAndRaise(e, raiseSearch)}
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
                  input: classes.nameInput,
                },
                autoid: "search-close-icon",
                endAdornment: (
                  <InputAdornment position="end" style={{ cursor: "pointer" }}>
                    <Icon>
                      <img
                        src={moneyIcon}
                        alt="$"
                        autoid="advance-search-drop-down"
                      ></img>
                    </Icon>
                    <Icon>
                      <ArrowDropDownIcon
                        onClick={() => {
                          this.setState({
                            advancedSearchOn: !this.state.advancedSearchOn,
                          });
                        }}
                        autoid="advance-search-drop-down"
                      />
                    </Icon>
                  </InputAdornment>
                ),
              }}
              notched="true"
              autoid="search-text-field"
            />
          </Grid>
        </Grid>

        {this.shouldAdvanceSearchRender(
          classes,
          raiseAdvancedSearch,
          this.turnOffAdvancedSearch
        )}
      </React.Fragment>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
