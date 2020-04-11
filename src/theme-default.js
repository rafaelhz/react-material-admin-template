import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, grey900, lightGreenA700} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  // palette: {
  // },
  appBar: {
    height: 57,
    color: blue600
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: blue600,
  },
  slider: {
    trackSize: 5,
    trackColor: lightGreenA700,
    trackColorSelected: lightGreenA700,
    // handleColorZero: "#bdbdbd",
    // handleFillColor: "#ffffff",
    handleSize: 18,
    handleSizeActive: 24,
    handleSizeDisabled: 8,
    // rippleColor: "#00bcd4",
    // rippleColor: "#ed20f7"
    // selectionColor: "#00bcd4"
    // selectionColor: "#ed20f7"
  },
});


export default themeDefault;
