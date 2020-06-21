import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";
import sendIcon from "../../assets/send.svg";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    backgroundColor: "#252c48",
    borderRadius: 50,
  },
  menu: {
    width: 200,
  },
  cssLabel: {
    color: "silver",
    fontSize: 12,

    "&$cssFocused": {
      color: "silver",
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

class BotInput extends Component {
  state = {
    userMessage: "",
  };

  handleChange = (e) => {
    this.setState({ userMessage: e.target.value });
  };

  render() {
    const { classes, submitUserMessage } = this.props;

    return (
      <Grid item container direction="row" xs={12} justify="space-between">
        <TextField
          label="Type your message here ..."
          className={classes.textField}
          margin="dense"
          value={this.state.userMessage}
          variant="outlined"
          autoComplete="on"
          onChange={this.handleChange}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              submitUserMessage(this.state.userMessage)
              this.setState({ userMessage: "" })
            }
          }}
          style={{ width: "100%" }}
          autoid="professor-input-box"
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
            endAdornment: (
              <InputAdornment position="end">
                <Icon
                  onClick={() => {
                    submitUserMessage(this.state.userMessage)
                    this.setState({ userMessage: "" })
                  }}
                  style={{
                    backgroundColor: "#009ecf",
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 30,
                    width: 30,
                  }}
                >
                  <img
                    src={sendIcon}
                    alt=">"
                    autoid="professor-send-button"
                    style={{ width: "75%", cursor: "pointer" }}
                  ></img>
                </Icon>
              </InputAdornment>
            ),
          }}
          notched="true"
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(BotInput);
