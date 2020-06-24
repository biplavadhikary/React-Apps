import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import professorIcon from "../../assets/john.svg";
import userIcon from "../../assets/avatar.svg";
//import { Typography } from "@material-ui/core";

class Chat extends Component {
  renderMessages = (messages) => {
    let keyCount = 0;

    return messages.map((message) => {
      /* Bot Message */
      if (message.user === "professor")
        return (
          <Grid
            container
            item
            autoid="ai"
            justify="flex-start"
            key={++keyCount}
            style={{ marginBottom: 20 }}
          >
            <Grid item xs={2}>
              <img
                src={professorIcon}
                alt="O"
                style={{ width: "50%", transform: "scaleX(-1)" }}
              ></img>
            </Grid>
            <Grid item xs={6} style={{ whiteSpace: "pre-line" }}>
              {message.message}
            </Grid>
          </Grid>
        );
      /* User Message */ else if (message.user === "me")
        return (
          <Grid
            container
            item
            autoid="human"
            justify="flex-end"
            key={++keyCount}
            style={{
              marginBottom: 20,
              textAlign: "right",
              whiteSpace: "pre-line",
            }}
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
      else return null;
    });
  };

  componentDidUpdate () {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

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

          {/* Dummy Element For Scroll */}
          <div ref={el => { this.el = el; }} />
        </Grid>
      </Grid>
    );
  }
}

export default Chat;
