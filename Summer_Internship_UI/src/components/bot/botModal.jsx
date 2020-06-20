import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import BotHeader from "./botHeader";
import Chat from "./chat";
import BotInput from "./botInput";
import messages from "./testMessages.json";

const styles = (theme) => ({
  paper: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: "95vh",
    backgroundColor: "#1B1F38",
    borderStyle: "solid",
    borderColor: "orange",
    borderTop: 2,
    borderLeft: 2,
    borderRight: 0,
    borderBottom: 0,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 3,
    outline: "none",
  },
});

class BotModal extends Component {
  state = {
    messages: messages,
  };

  sendUserMessage = (msg) => {
    //console.log("You typed: ", msg)
    if (msg === "") return;

    const newMessage = {
      user: "me",
      message: msg,
    };
    const allMessages = [...this.state.messages, newMessage];
    this.setState({ messages: allMessages });
  };

  handleClose = () => {
    this.setState({ messages: [] });
    this.props.handleMinimize();
  };

  render() {
    const { classes, open, handleMinimize } = this.props;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleMinimize}
        hideBackdrop={true}
      >
        <Grid
          item
          container
          xs={12}
          sm={6}
          md={3}
          alignItems="flex-start"
          direction="row"
          className={classes.paper}
        >
          <BotHeader
            raiseMinimize={handleMinimize}
            raiseClose={this.handleClose}
          />
          <Chat messages={this.state.messages} />
          <BotInput
            classes={classes}
            submitUserMessage={this.sendUserMessage}
          />
        </Grid>
      </Modal>
    );
  }
}

export default withStyles(styles)(BotModal);
