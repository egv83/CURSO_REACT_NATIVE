import {StatusBar} from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {

    const [valorA, setValorA] = useState("0");
    const [valorB, setValorB] = useState("0");

    const [result, setResult] = useState(0);


    const operacion = (fn) => {
        if(valorB === "0" && fn === Dividir) {
            Alert.alert("ERROR","No puede dividir por 0");
            return;
        }
        setResult(fn(parseFloat(valorA), parseFloat(valorB)));
    }

    const Sumar = (val1, val2) => {
        return (val1 + val2);
    }

    const Restar = (val1, val2) => {
        return (val1 - val2);
    }

    const Multiplicar = (val1, val2) => {
        return (val1 * val2);
    }

    const Dividir = (val1, val2) => {
        return (val1 / val2);
    }

    return (
        <View style={styles.container}>
            <Text>CALCULADORA</Text>
            <StatusBar style="auto"/>

            <Text>Valor 1</Text>
            <TextInput
                style={styles.textBox}
                value={valorA}
                onChangeText={setValorA}
            />

            <Text>Valor 2</Text>
            <TextInput
                style={styles.textBox}
                value={valorB}
                onChangeText={setValorB}
            />

            <Button title="Sumar"
                    onPress={() => {
                        operacion(Sumar);
                    }}
            />

            <Button title="Restar"
                    onPress={() => {
                        operacion(Restar);
                    }}
            />

            <Button title="Multiplicar"
                    onPress={() => {
                        operacion(Multiplicar);
                    }}
            />

            <Button title="Dividir"
                    onPress={() => {
                        operacion(Dividir);
                    }}
            />

            <Text>Resultado: {result}</Text>

            <Button title="Limpiar"
                    onPress={() => {
                        setValorA("0");
                        setValorB("0");
                        setResult(0);
                    }}
            />

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
    textBox: {
        borderColor: "black",
        borderWidth: 1,
        paddingTop: 5,
        paddingHorizontal: 40
    }
});
