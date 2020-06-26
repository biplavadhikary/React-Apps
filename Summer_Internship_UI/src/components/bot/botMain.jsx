import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import BotHeader from "./botHeader";
import Chat from "./chat";
import BotInput from "./botInput";
import { getMessageResponseAPI } from "../../services/services";
//import messages from "./testMessages.json";

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

class BotMain extends Component {
  state = {
    messages: [
      {
        user: "professor",
        message:
          `Good day! I'm your friendly Professor AR Bot. 
          I can help you analyze info on AR from your customers. 
          To find out what I can do , you can ask me that, or type help anytime.`,
      },
    ],
  };

  addMessageToChat = (usr, msg) => {
    const msgResponse = {
      user: usr,
      message: msg,
    };

    const allMessages = [ ...this.state.messages, msgResponse];
    this.setState({ messages: allMessages });
  };

  sendUserMessage = (msg) => {
    //console.log("You typed: ", msg)
    if (msg === "") return;

    this.addMessageToChat("me", msg);

    getMessageResponseAPI(msg)
      .then((response) => {
        // console.log(response.data);
        this.addMessageToChat("professor", response.data.message);
      })
      .catch((err) => {
        this.addMessageToChat(
          "professor",
          `My server is currently 
          offline. Please try again later. `
        );
      });
  };

  handleClose = () => {
    const initialMsg = this.state.messages[0];
    this.setState({ messages: [initialMsg] });
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

export default withStyles(styles)(BotMain);
