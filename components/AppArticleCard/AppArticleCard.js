import { Pressable, Text, Image, View } from "react-native";
import AppArticleCardStyle from "./AppArticleCardStyle";

export default ({ onPress, article}) => {

  const styles = AppArticleCardStyle();

  return (
    <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.imageContainer}>
      <Image
       source={{uri : article.photos[0]}}
       cachePolicy = "memory-disk"
       style={styles.image }
       />
       </View>
      <Text>{article.titre}</Text>
      <Text>{article.prix}€</Text>
    </Pressable>
  );
};
