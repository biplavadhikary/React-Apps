import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import closeIcon from "../../assets/close.svg"
import minimizeIcon from "../../assets/minimize.svg"

const BotHeader = (props) => {
  const { raiseMinimize, raiseClose } = props;

  return (
    <Grid item container direction="row" xs={12} justify="space-between" style={{ height: "5vh" }}>
      <Grid item xs={9}>
        <Typography variant="h6" id="modal-title">
          PROFESSOR
        </Typography>
      </Grid>
      <Grid item xs={3} container justify="space-between" style={{ cursor: "pointer" }}>
        <img src={minimizeIcon} alt="-" style={{ width: "30%" }} onClick={raiseMinimize}></img>
        <img src={closeIcon} alt="X" style={{ width: "30%" }} onClick={raiseClose} autoid="professor-close-button"></img>
      </Grid>
    </Grid>
  );
};

export default BotHeader;
