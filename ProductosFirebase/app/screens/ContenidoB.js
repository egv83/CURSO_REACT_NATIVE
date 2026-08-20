import { View, Text, StyleSheet } from "react-native";

export const ContenidoB=()=>{
    return (
        <View style={styles.container}>
            <Text>CONTENIDO B</Text>
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