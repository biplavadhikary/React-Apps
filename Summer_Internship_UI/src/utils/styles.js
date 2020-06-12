import theme from './theme';

export const dashboardStyle = (theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: "1vw",
    paddingRight: "1vw",
  },
  textStyle1: {
    color: "#FFFFFFA6",
    fontSize: "1em",
    marginTop: "2vh",
  },
  textStyle2: {
    color: "#FFFFFFA6",
    fontSize: "1.5vw",
  },
  textStyle3: {
    color: "white",
    fontSize: "1.8em",
  },
  textfield: {
    color: "#FFFFFFA6",
    fontSize: "1.5vw",
  },
  nameInput: {
    fontSize: "1vw",
    color: "#FFFFFF",
  },
  notchedOutline: { borderWidth: "1px", borderColor: "#5DAAE0 !important" },
  searchBtn: {
    marginTop: "8vh",
    minWidth: "5vw",
    minHeight: "2.188vw",
    fontSize: "0.95vw",
    border: "solid 0.75px #3B617C",
    // marginRight: '0.5rem',
    alignSelf: "center",
    color: "#5DAAE0",
    "&:hover": {
      backgroundColor: "#5daae0",
      color: "white",
    },
  },
  searchBtnDisabled: {
    minWidth: "5vw",
    minHeight: "2.188vw",
    fontSize: "0.95vw",
    border: "solid 0.75px #3B617C",
    // marginRight: '0.5rem',
    alignSelf: "center",
    color: "white !important",
    background: "#FFFFFFa5",
    "&:hover": {
      cursor: "default",
      backgroundColor: "#FFFFFFa5",
    },
  },
});

export const customerDetailsTheme = (theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: "1vw",
    paddingRight: "1vw",
  },
  textStyle1: {
    color: "#FFFFFFA6",
    fontSize: 12,
    marginTop: "2vh",
  },
  textStyle2: {
    color: "#FFFFFFA6",
    fontSize: "1.5vw",
  },
  textStyle3: {
    color: "white",
    fontSize: 30,
  },
  // hellotext: {
  //   fontSize: "4vw",
  //   color: "#FFFFFFA6",
  //   height: "10vh",
  // },
  // hellotext1: {
  //   fontSize: "2.5vw",
  //   marginTop: "5vh",
  //   padding: "1vh",
  //   color: "#FFFFFF",
  //   backgroundColor: "#5DAAE0",
  // },
  // hellotext3: {
  //   fontSize: "1vw",
  //   marginTop: "5vh",
  //   padding: "0.5vh",
  //   color: "#FFFFFF",
  //   backgroundColor: "#5DAAE0",
  // },
  // hellotext2: {
  //   fontSize: "1.2vw",
  //   marginTop: "5vh",
  //   padding: "1vh",
  //   color: "#FFFFFF",
  //   backgroundColor: "#5DAAE0",
  // },
  // hellotext4: {
  //   fontSize: "1.5vw",
  //   marginTop: "2vh",
  //   padding: "1vh",
  //   color: "#FFFFFF",
  // },
  searchBtn: {
    marginTop: "2vh",
    minWidth: "5vw",
    minHeight: "2.188vw",
    fontSize: "0.95vw",
    border: "solid 0.75px #3B617C",
    // marginRight: '0.5rem',
    alignSelf: "center",
    color: "#5DAAE0",
    "&:hover": {
      backgroundColor: "#5daae0",
      color: "white",
    },
  },
});