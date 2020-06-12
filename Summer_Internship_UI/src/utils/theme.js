import { createMuiTheme } from "@material-ui/core/styles";

export const pxToRem = (px) => `${px / 22.5}rem`;
export const pxToVw = (px) =>
  `${(100 / document.documentElement.clientWidth) * px}vw`;

export const pxToVh = (px) =>
  `${px / (document.documentElement.clientHeight * 0.01)}vh`;

export default createMuiTheme({
  shadows: ["none"],

  palette: {
    primary: {
      main: "#1B1F38",
      light: "rgb(93,175,240,0.5)",
      dark: "rgb(93,175,240,0.2)",
    },
    secondary: {
      main: "#e5f5f7"
    },
    text: {
      primary: "rgba(255, 255, 255, 0.7)",
      secondary: "#FFFFFF",
      disabled: "#FFFFFF",
      hint: "#FFFFFF",
    },
  },
  overrides: {
    MuiButton: {
      text: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: "#fff",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      },
    },

    MuiPopover: {
      root: {
        backgroundColor: "gray",
      },
      paper: {
        backgroundColor: "#38436e",
      },
    },

    MuiTableCell: {
      root: {
        padding: "0 20px",
      }
    }
  }
});
