import {View, Text, StyleSheet} from "react-native";
import { useState } from "react";
import { Button, Divider, Icon, Input } from "@rneui/base";
import { resetClave } from "../services/AutenticacionService";

export const CambioClaveForm=({navigation})=>{

    const [email, setEmail] = useState(null);
    const resetear=()=>{
        resetClave(email);
    }

    return (
        <View style={styles.container}>
            <Input
                value={email}
                onChangeText={setEmail}
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

            <Button
                title="Cambiar Clave"
                onPress={resetear}
            />


        </View>
    )

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