import {Button, StyleSheet, Text, View} from "react-native";

export const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>HomeScreen</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    // style={styles.button}
                    title='Contactos'
                    onPress={() => {
                        navigation.navigate('ContactsNav');
                    }}/>

                <Button
                    // style={styles.button}
                    title='Productos'
                    onPress={() => {
                        navigation.navigate('ProductsNav');
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        // backgroundColor: 'green',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        // backgroundColor: 'red',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        // backgroundColor: 'yellow',
    },
    button: {
        // backgroundColor: 'pink',
        // justifyContent: 'space-around',
    }
});