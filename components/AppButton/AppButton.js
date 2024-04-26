import { Pressable, Text, View } from "react-native";
import AppButtonStyles from "./AppButtonStyles";
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({ onPress, title,icon, type='simple', style = {} }) => {

  const styles = AppButtonStyles();

  return (
    <Pressable style={[styles[type],style]} onPress={onPress}>
      
        {type == 'simple' && <Text style={styles.text}>{title}</Text>}
        {type == 'icon' && (<Icon name={icon} type="font-awesome-5" size={20} color="white" style={{padding:2}}></Icon>)}
        
    </Pressable>
  );
};
