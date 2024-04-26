import { StyleSheet } from "react-native";
import theme from "../../theme";


export default AppSwitchStyles = () => {

  const colorsTheme = theme();

  return StyleSheet.create({
    container: {
      backgroundColor: colorsTheme.primary,
      padding: 10,
      borderRadius: 5,
      },
    text: {
      color: "white",
    },
  });
}