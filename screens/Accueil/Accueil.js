import { FlatList, Text, View } from "react-native";
import AppStyles from "../../AppStyles";
import { useEffect, useState } from "react";
import AppPotoCard from "../../components/AppPotoCard/AppPotoCard";
import * as SecureStore from "expo-secure-store";
import { Image } from 'react-native';

export default () => {
  const [listePoto, setListePoto] = useState([
    { 
      _id: '1', 
      Prenom: 'Poto 1', 
      Nom: 'Nom 1', 
      Ville: 'Ville 1', 
      Age: 'Age 1', 
      Description: 'Description 1', 
      Prix: 'Prix 1', 
      photos: [require('../../img/p1.png')],
      IsPoto: true
    },
    { 
      _id: '3', 
      Prenom: 'Poto 3', 
      Nom: 'Nom 3', 
      Ville: 'Ville 3', 
      Age: 'Age 3', 
      Description: 'Description 3', 
      Prix: 'Prix 3', 
      photos: [require('../../img/p2.jpg')],
      IsPoto: true
    },
    { 
      _id: '2', 
      Prenom: 'Poto 2', 
      Nom: 'Nom 2', 
      Ville: 'Ville 2', 
      Age: 'Age 2', 
      Description: 'Description 2', 
      Prix: '', 
      photos: ['http://localhost:5000/image2.jpg'],
      IsPoto: false
    },
    
  ]);

  const listePotoFiltree = listePoto.filter(poto => poto.IsPoto);

  const appStyles = AppStyles();

  if (listePotoFiltree.length > 0) {
    return (
      <View style={[appStyles.container, appStyles.safeArea]}>
        <FlatList
          horizontal={true}
          data={listePotoFiltree}
          renderItem={({ item }) => <AppPotoCard poto={item} />}
          keyExtractor={(item) => item._id}
        />
      </View>
    );
  } else {
    return <Text>Liste vide</Text>;
  }
};
