import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CustomerAR from "./customerAR";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { CSVLink } from "react-csv";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    color: "silver",
    fontSize: 12,

    "&$cssFocused": {
      color: "lightblue",
    },
  },
  cssFocused: {},
});

class CustomerHeader extends Component {
  state = {
    open: false,
    dtypeVal: null,
    omtVal: null
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleTextChange = (evt) => {
    if (evt.target.name === 'dtype')  this.setState({ dtypeVal: evt.target.value })
    else if (evt.target.name == 'oAmt') this.setState({ omtVal: evt.target.value })
  };

  renderVal = (def, stateVal) => {
    if (stateVal === null) return def
    else return stateVal
  }

  filterSelected = (data, selected) => {
    if (selected.length === 0) return data;
    else return data.filter((item) => selected.includes(item.pk_id));
  };

  render() {
    const {
      classes,
      card,
      stats,
      data,
      selected,
      filenamePostfix,
    } = this.props;

    const filteredData = this.filterSelected(data, selected);
    let selectedData = data.find((entry) => entry.pk_id === selected[0])
    if (selectedData === undefined) selectedData = {
        doctype: "",
        total_open_amount: 0,
      };
    //console.log(this.state.dtypeVal, this.state.omtVal)

    return (
      <Grid
        item
        container
        justify="space-between"
        direction="row"
        style={{ marginBottom: 10, padding: "0 1vw" }}
      >
        <Grid
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-end"
          xs={4}
        >
          <Tooltip title="Modify">
            <Button
              variant="outlined"
              size="medium"
              color="secondary"
              className={classes.button}
              onClick={this.handleClickOpen}
              disabled={selected.length !== 1}
            >
              Modify
            </Button>
          </Tooltip>
          <CSVLink
            data={filteredData}
            filename={"Invoice-data-" + filenamePostfix + ".csv"}
            onClick={() => selected.length !== 0}
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "default",
            }}
          >
            <Tooltip title="Export">
              <Button
                variant="outlined"
                size="medium"
                color="secondary"
                className={classes.button}
                disabled={selected.length === 0}
              >
                Export
              </Button>
            </Tooltip>
          </CSVLink>
        </Grid>
        <CustomerAR classes={classes} card={card} stats={stats} />

        {/* Form */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          PaperProps={{
            style: {
              backgroundColor: "#364973",
              border: "2px solid white",
            },
          }}
        >
          <DialogTitle id="form-dialog-title">Modify</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter the Updated Values</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Open Amount"
              name="oAmt"
              value={this.renderVal(selectedData.total_open_amount, this.state.omtVal)}
              onChange={this.handleTextChange}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              label="Document Type"
              name="dtype"
              value={this.renderVal(selectedData.doctype, this.state.dtypeVal)}
              type="text"
              onChange={this.handleTextChange}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose}
              variant="outlined"
              size="medium"
              color="secondary"
              className={classes.button}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.props.raiseModification(this.state.dtypeVal, this.state.omtVal)
                this.handleClose()
              }}
              variant="outlined"
              size="medium"
              color="secondary"
              className={classes.button}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    );
  }
}

export default withStyles(styles)(CustomerHeader);
