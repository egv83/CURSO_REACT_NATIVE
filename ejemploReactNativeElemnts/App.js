import {Alert, StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Input} from '@rneui/base'
import {useState} from "react";

export default function App() {

    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <Text>React Native Elements</Text>
            <Input
            value={name}
            onChangeText={setName}
            placeholder="Enter Name"
            label="Nombre"
            />
            <Button
                title="OK"
                icon={{
                    name: 'google',
                    color: 'white',
                    type: 'zocial',
                    size: 20,
                }}
                onPress={()=>{
                    Alert.alert("INFO", "Su nombre es: "+name );
                }}
            >
            </Button>
            <Button>
                <Icon name="cloud" color="white" type='ionicon' />
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
