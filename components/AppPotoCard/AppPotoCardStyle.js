import { StyleSheet } from "react-native";
import theme from "../../theme";

export default AppArticleCardStyle = () => {
    const colorsTheme = theme();

    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
        },
        text: {},
        image: {
            height: "100%",
            width: "100%",
            resizeMode: "cover",
        },
        imageContainer: {
            height: 150,
            width: 200,
        },
    });
}
