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
import { useState } from 'react';
import Inscription from "./screens/Inscription/Inscription";
import Accueil from "./screens/Accueil/Accueil";
import Chercher from "./screens/Chercher/Chercher";
import Message from "./screens/Message/Message";
import Profil from "./screens/Profil/Profil";
import Toast from "react-native-root-toast";
import { Icon } from "@rneui/base";

export default () => {

  const LoginNavigation = createNativeStackNavigator();
  const NavigationPrincipale = createBottomTabNavigator();
  // const [connecte, setConnecte] = useState(SecureStore.getItem("jwt") != null);
  const [connecte, setConnecte] = useState(true);

  const onConnexion = (data) => {
  
    // fetch("http://"+process.env.EXPO_PUBLIC_IP_SERVEUR+"/login", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {"content-type": "application/json"},
    // })
    // .then((result) => result.json())
    // .then((result) => {
    //   SecureStore.setItem("jwt", result.jwt)
    //   setConnecte(true);
    // });
  } 
  const onDeconnexion =() => {
      // SecureStore.deleteItemAsync("jwt");
      setConnecte(false);
    }

   const LoginScreen = () => {
    const navigation = useNavigation();
    const onInscription = (data) => {
      // console.log(data);
      // fetch("http://"+process.env.EXPO_PUBLIC_IP_SERVEUR+"/utilisateur", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: {"content-type": "application/json"},
      // })
      // .then(async (result) => {
      //   console.log(result);
      //   if(!result.ok){
      //     const message = await result.json();
      //     let err = new Error(message.message);
      //     err.result = result;
      //     err.status = result.status;
      //     throw err;
      //   }
      // })
      // .then((result) => {
      //   Toast.show("Compte crée, vous pouvez desormais vous connecter")
      //   navigation.navigate("connexion");
      // })
      // .catch((err) => Toast.show(err.message, {backgroundColor: "red"}));
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

    const ProfilProps = () =>  <Profil onDeconnexion={onDeconnexion}></Profil>
    
    return (
      <NavigationPrincipale.Navigator>
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <Icon type="material" name="home" color={color}></Icon>;
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="accueil"
          component={Accueil}
        />
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return (
                <Icon
                  type="font-awesome-5"
                  size={19}
                  name="search"
                  color={color}
                ></Icon>
              );
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="chercher"
          component={Chercher}
        />
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <Icon type="material" name="email" color={color}></Icon>;
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="message"
          component={Message}
        />
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <Icon type="material" name="face" color={color}></Icon>;
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="profil"
          component={ProfilProps}
        />
      </NavigationPrincipale.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
    <NavigationContainer>
    <StatusBar style="auto" />
      {connecte ? <HomeScreen/> : <LoginScreen/>}
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

