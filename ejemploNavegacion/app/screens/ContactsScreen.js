import {Button, StyleSheet, Text, View} from "react-native";

export const Contacts = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ContactsScreen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title='Ir a HOME'
                    onPress={() => {
                        navigation.navigate('HomeNav');
                    }}
                />
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
    }
});