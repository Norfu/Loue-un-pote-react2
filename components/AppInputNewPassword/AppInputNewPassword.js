import { Pressable, Text, View } from "react-native";
import { Controller } from "react-hook-form";
import { Icon, Input } from "@rneui/base";
import AppInputNewPasswordStyles from "./AppInputNewPasswordStyles";
import { useState } from "react";

export default ({ control,name,label, style = {} }) => {

  const styles = AppInputNewPasswordStyles();

  const [passwordRules, setPasswordRules] = useState({
    minLength:false,
    minusucule:false,
    majuscule:false
  })

  const RuleLine = ({valid,message}) => (
    <View style={{flexDirection : "row", alignItems:"center"}}>
    <Icon type="font-awesome-5" name={valid ? "smile-wink" : "poo"} color={valid ? "green" : "darkred"}/>
    <Text style={{marginLeft:3}}>{message}</Text>
  </View>
  )
  
  return (
    <Controller 
    control={control}
    name={name}
    defaultValue=""
    rules={{ pattern: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/ }}
    render={({field:{onChange, onBlur,value}})=> (
      <>
      <Input label={label} 
      style={{margin:0, padding:0}} 
      onBlur={onBlur}
      onChangeText={(text) =>{ 
        onChange(text)
        setPasswordRules({
          minLength:text.length >= 8,
          minusucule: /[a-z]/.test(text),
          majuscule: /[A-Z]/.test(text)
      })
    }}
      value={value}
    secureTextEntry={true}
      />
<RuleLine valid={passwordRules.minLength} message="8 cara mini"/>
<RuleLine valid={passwordRules.minusucule} message="au moins une maj"/>
<RuleLine valid={passwordRules.majuscule} message="au moins une min"/>
</>
    )}
    />
  );
};
