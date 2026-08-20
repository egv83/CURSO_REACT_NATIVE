import {View, Text, StyleSheet} from "react-native";
import { useState } from "react";
import { Button, Icon, Input } from "@rneui/base";
import { CreateUser } from "../services/AutenticacionService";

export const RegistroForm=()=>{
    const[usuario, setUsuario] = useState(null);
    const[clave, setClave] = useState(null);
    const[confimClave, setConfirmClave] = useState(null);

    const registrar=()=>{
        CreateUser(usuario,clave);
    }


    return <View style={styles.container}>
        <Input
            value={usuario}
            onChangeText={setUsuario}
            label="Mail"
            keyboardType="email-address"
            leftIcon={
                <Icon
                    name='user-o'
                    size={24}
                    color='black'
                    type='font-awesome'
                />
            }
        />

        <Input
            value={clave}
            onChangeText={setClave}
            label="Clave"
            // keyboardType=""
            leftIcon={
                <Icon
                    name='form-textbox-password'
                    size={24}
                    color='black'
                    type='material-design'
                />
            }
        />

        <Input
            value={confimClave}
            onChangeText={setConfirmClave}
            label="Confirmar clave"
            // keyboardType=""
            leftIcon={
                <Icon
                    name='form-textbox-password'
                    size={24}
                    color='black'
                    type='material-design'
                />
            }
        />

        <Button
            title="Guaedar"
            onPress={registrar}
        />

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // FlexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',  //eje principal
        paddingBottom: 200
    },

    
});