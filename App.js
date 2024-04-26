import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Connexion from './screens/Connexion/Connexion';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStyles from "./AppStyles";
import * as SecureStore from 'expo-secure-store'
import Profil from './screens/Profil/Profil';
import { useState } from 'react';

export default () => {

  const LoginNavigation = createNativeStackNavigator();
  const NavigationPrincipal = createBottomTabNavigator();
  const [connecte, setConnecte] = useState(SecureStore.getItem("jwt") != null);

  const onConnexion = (data) => {
  
    fetch("http://"+process.env.EXPO_PUBLIC_IP_SERVEUR+"/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"content-type": "application/json"},
    })
    .then((result) => result.json())
    .then((result) => {
      SecureStore.setItem("jwt", result.jwt)
      setConnecte(true);
    });
  } 
  const onDeconnexion =() => {
      SecureStore.deleteItemAsync("jwt");
      setConnecte(false);
    }

   const LoginScreen = () => {
    const navigation = useNavigation();
    const onInscription = (data) => {
      fetch("http://"+process.env.EXPO_PUBLIC_IP_SERVEUR+"/utilisateur", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"content-type": "application/json"},
      })
      .then(async (result) => {
        if(!result.ok){
          const message = await result.json();
          let err = new Error(message.message);
          err.result = result;
          err.status = result.status;
          throw err;
        }
      })
      .then((result) => {
        Toast.show("Compte crée, vous pouvez desormais vous connecter")
        navigation.navigate("connexion");
      })
      .catch((err) => Toast.show(err.message, {backgroundColor: "red"}));
    }
    const ConnexionProps = () => (
      <Connexion onConnexion={onConnexion}></Connexion>
    );
      const InscriptionProps = () => (
        <Inscription onInscription={onInscription}></Inscription>
      )
    return (
      <LoginNavigation.Navigator>
        <LoginNavigation.Screen
        component={ConnexionProps}
        name="connexion"
        />
      <LoginNavigation.Screen
        component={InscriptionProps}
        name="inscription"
        />

      </LoginNavigation.Navigator>
    )

    }
  const HomeScreen = () => {
    const styles = AppStyles();

    const ProfilProps = () => (
      <Profile onDeconnexion={onDeconnexion}></Profile>
    )
    return(
      <NavigationPrincipal.Navigator>
        <NavigationPrincipal.Screen
        />
      </NavigationPrincipal.Navigator>
    )
  }
  return (
    <SafeAreaProvider>
    <NavigationContainer>
    <StatusBar style="auto" />
      {connecte ? <HomeScreen/> : <LoginScreen/>}
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

