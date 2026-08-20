import { View, Text, StyleSheet } from "react-native";

export const CerrarSesion=()=>{
    return (
        <View style={styles.container}>
            <Text>CERRAR SESION</Text>
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