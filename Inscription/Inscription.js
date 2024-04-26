import {View} from 'react-native';
import AppStyles from '../../AppStyles';
import { Input } from '@rneui/base';
import { useState } from 'react';
import AppButton from '../../components/AppButton/AppButton';
import AppInputText from '../../components/AppInputText/AppInputText';
import { useForm } from 'react-hook-form';
import AppInputNewPassword from '../../components/AppInputNewPassword/AppInputNewPassword';
import App from '../App';


export default ({onInscription}) =>{
    
    const styles = AppStyles()
    const [isPoto, setIsPoto] = useState(false);

    const {control, handleSubmit, formState: {errors}} = useForm();
    const toggleSwitch = () => setIsPoto(previousState => !previousState);

    return(
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
            <Switch
                control={control}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isPoto ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isPoto}
            />
            <AppButton
                title="Inscription" 
                style={{width:100}}
                onPress={handleSubmit(onInscription)}/>
        </View>
    )
}