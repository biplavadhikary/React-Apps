import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from '@material-ui/core/Icon';
import searchIcon from "../assets/mag-glass.svg"
import moneyIcon from "../assets/attach_money.svg";

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
  nameInput: {
    fontSize: 12,
    color: "#FFFFFF",
  },
});

class SearchBar extends Component {
  render() {
    const { classes, raiseSearch } = this.props;

    return (
      <Grid container alignItems="center" style={{ padding: 10 }}>
        <Grid item xs={1}>
          <Icon>
            <img src={searchIcon} alt="S" style={{ width: "80%", float: "right" }}/>
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
                input: classes.nameInput,
              },
              endAdornment: <InputAdornment position="end">
                <Icon>
                  <img src={moneyIcon} alt="$"></img>
                </Icon>
              </InputAdornment>,
            }}
            notched="true"
          />
        </Grid>
      </Grid>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
