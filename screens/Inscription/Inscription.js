import {View, Switch, ScrollView} from 'react-native';
import AppStyles from '../../AppStyles';
import { Input } from '@rneui/base';
import { useState } from 'react';
import AppButton from '../../components/AppButton/AppButton';
import AppInputText from '../../components/AppInputText/AppInputText';
import { useForm } from 'react-hook-form';
import AppInputNewPassword from '../../components/AppInputNewPassword/AppInputNewPassword';
import AppSwitch from '../../components/AppSwitch/AppSwitch';


export default ({onInscription}) =>{
    
    const styles = AppStyles()
    const [isPoto, setIsPoto] = useState(false);

    const {control, handleSubmit, formState: {errors}} = useForm();

    return(
        <ScrollView>
        <View style={[styles.container, styles.safeArea]}>
            <AppInputText
                control={control}
                name="firstname"
                defaultValue=""
                rules={{required:"le champs est requis"}}
                label="Prenom" />

            <AppInputText
                control={control}
                name="lastname"
                defaultValue=""
                rules={{required:"le champs est requis"}}
                label="Nom" />
            <AppInputText
                control={control}
                name="age"
                defaultValue=""
                rules={{
                    required: "le champs est requis",
                    validate: value => {
                        const pattern = /^[0-9]+$/;
                        if (!pattern.test(value)) {
                            return "l'age doit etre un nombre";
                        }
                        if (parseInt(value) < 18) {
                            return "l'age doit etre au moins de 18 ans";
                        }
                        return true;
                    }
                }}
                label="Age" />
            <AppInputText 
                control={control}
                name="ville"
                defaultValue=""
                label="Ville"  
                />
            <AppInputText 
                control={control}
                name="email"
                defaultValue=""
                rules={{required: "le champs est requis",
                    pattern: {value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "email non valide"}
                }}
                label="Email"  
                />
            <AppInputNewPassword 
                control={control}
                name="password"
                label="Mot de passe"
                    />
           <AppSwitch
           control={control}
           name="isPoto" />
            <AppButton
                title="Inscription" 
                style={{width:100, marginLeft:20}}
                onPress={handleSubmit(onInscription)}/>
        </View>
        </ScrollView>
    )
}