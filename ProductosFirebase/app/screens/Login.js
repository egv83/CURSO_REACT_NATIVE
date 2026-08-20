import {View, Text, StyleSheet} from "react-native";
import { useState } from "react";
import { Button, Divider, Icon, Input } from "@rneui/base";
import { ingresar, logOut } from "../services/AutenticacionService";

export const LoginFrom=({navigation})=>{

    const [usuario,setUsuario] = useState(null);
    const [calve, setClave] = useState(null);

    const validarLogin=()=>{
        console.log("VALIDANDO LOGIN")
        ingresar(usuario,calve);
    }

    const navegarRegistro=()=>{
        navigation.navigate("RegistroNavigation");
    }

    const navegarRecuperaClave=()=>{
        navigation.navigate("CambiarClaveNavigation");
    }

    return <View style={styles.container}>
        <Text>INGRESO AL SISTEMA</Text>

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
            value={calve}
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

        <Button
            title="Ingresar"
            onPress={validarLogin}
        />
        <Divider width={20} color="red"/>
        <Button
            title="Registrar Usuario"
            onPress={navegarRegistro}
        />
        <Divider width={20} color="red"/>
        <Button
            style={styles.btnLogOut}
            title="Cerrar Sesion"
            onPress={logOut}
        />
        <Divider width={20} color="white"/>
        <Button
            // style={styles.btnLogOut}
            title="Recuperar Clave"
            onPress={navegarRecuperaClave}
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