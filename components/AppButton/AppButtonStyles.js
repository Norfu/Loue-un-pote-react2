import { StyleSheet } from "react-native";
import theme from "../../theme";


export default AppButtonStyles = () => {

  const colorsTheme = theme();

  return StyleSheet.create({
    simple: {
      backgroundColor: colorsTheme.primary,
      padding: 10,
      borderRadius: 5,
    },
    icon:{
      width:30,
      height:30,
      borderRadius:15,
      backgroundColor: colorsTheme.primary,
    },
    text: {
      color: "white",
    },
  });
}
