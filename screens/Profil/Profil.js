import { Text, View, TextInput, Image, Button } from "react-native";
import AppStyles from "../../AppStyles";
import AppButton from "../../components/AppButton/AppButton";
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

export default ({onDeconnexion}) => {
  const appStyles = AppStyles();
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [isPoto, setIsPoto] = useState(true); 
  const [prix, setPrix] = useState('');

  const selectImage = () => {
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImageUri(source.uri);
      }
    });
  };

  return (
    <View style={[appStyles.container, appStyles.centered]}>
      <Text style={{ marginVertical: 10 }}>Profil</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
        onChangeText={text => setDescription(text)}
        value={description}
        placeholder="Ecris ta description ici"
      />
      {isPoto && (
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
          onChangeText={text => setPrix(text)}
          value={prix}
          placeholder="Ecris ton tarif ici"
          keyboardType="numeric"
        />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginVertical: 10 }} />}
      <Button title="Select Image" onPress={selectImage} style={{ marginVertical: 10 }} />
      <AppButton onPress={onDeconnexion} title="Deconnexion" style={{ marginVertical: 10 }} />
    </View>
  );
};