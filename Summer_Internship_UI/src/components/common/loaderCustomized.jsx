import React, { PureComponent } from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  loader: {
    color: "white",
    position: "absolute",
    left: "calc(50% - 15px)",
    top: "calc(50% - 15px)",
  },
});

class LoaderCustomized extends PureComponent {
  render() { 
    const { classes } = this.props

    return (
      <CircularProgress className={classes.loader} size={30} thickness={5} />
    );
  }
}

LoaderCustomized.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoaderCustomized);
