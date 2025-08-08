import {Button, StyleSheet, Text, View} from "react-native";

export const ProductsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Productos</Text>
            <View style={styles.buttonContainer}>
                <Button style={styles.button}
                        title='Home'
                        onPress={() => {
                            navigation.navigate('HomeNav')
                        }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 10
    },
    button: {
        // paddingTop: 8
    }
});