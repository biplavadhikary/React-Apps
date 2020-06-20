import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import professorIcon from "../../assets/john.svg";
import userIcon from "../../assets/avatar.svg";
//import { Typography } from "@material-ui/core";

const styles = (theme) => ({});

class Chat extends Component {
  renderMessages = (messages) => {
    return messages.map((message) => {
      /* Bot Message */
      if (message.user === "professor")
        return (
          <Grid
            container
            item
            justify="flex-start"
            style={{ marginBottom: 20 }}
          >
            <Grid item xs={2}>
              <img src={professorIcon} alt="O" style={{ width: "50%" }}></img>
            </Grid>
            <Grid item xs={6}>
              {message.message}
            </Grid>
          </Grid>
        );
      /* User Message */ else if (message.user === "me")
        return (
          <Grid
            container
            item
            justify="flex-end"
            style={{ marginBottom: 20, textAlign: "right" }}
          >
            <Grid item xs={6}>
              {message.message}
            </Grid>
            <Grid item xs={2}>
              <img
                src={userIcon}
                alt="O"
                style={{ width: "50%", paddingRight: "20%" }}
              ></img>
            </Grid>
          </Grid>
        );
    });
  };

  render() {
    const { messages } = this.props;
    //console.log(messages)

    return (
      <Grid
        item
        container
        xs={12}
        direction="column"
        style={{
          height: "70vh",
          padding: "3vh 0",
          color: "silver",
          overflow: "scroll",
        }}
      >
        <Grid item container>
          {this.renderMessages(messages)}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Chat);
