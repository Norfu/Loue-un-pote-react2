import { Pressable, Text, Image, View } from "react-native";
import AppPotoCardStyle from "./AppPotoCardStyle";

export default ({ onPress, poto}) => {

  const styles = AppPotoCardStyle();

  return (
    <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.imageContainer}>
      <Image
        source={poto.photos[0]}
       cachePolicy = "memory-disk"
       style={styles.image }
       />
       </View>
      <Text>{poto.Prenom} {poto.Nom}</Text>
      <Text>{poto.Ville}</Text>
      <Text>{poto.Age}</Text>
      <Text>{poto.Description}</Text>
      <Text>{poto.Prix}</Text>
    </Pressable>
  );
};
