import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {

    const [estatura, setEstatura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);
    const [msg, setMsg] = useState("");

    let imcCalculado = 0;

    let msg1 = "Su peso es inferior al normal";
    let msg2 = "Su peso es normal";
    let msg3 = "Su peso es superior al normal";
    let msg4 = "Su peso es muy alto: tiene obesidad";

    let estaturaMetros;
    let pesoKilogramos;

    const calculateIMC = () => {
        setMsg("");
        estaturaMetros = parseInt(estatura) / 100;
        pesoKilogramos = parseFloat(peso);

        imcCalculado = (pesoKilogramos / (estaturaMetros * estaturaMetros)).toFixed(2);

        setImc(imcCalculado);

        console.log(imcCalculado);

        if (imcCalculado < 18.5) {
            setMsg(msg1);
        } else if (imcCalculado >= 18.5 && imcCalculado < 25.0) {
            setMsg(msg2);
        } else if (imcCalculado >= 25.0 && imcCalculado < 30.0) {
            setMsg(msg3);
        } else if (imcCalculado >= 30.0) {
            setMsg(msg4);
        }

    }

    const limpiar = () => {
        setEstatura("");
        setPeso("");
        setImc(0);
        setMsg("");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calcular IMC</Text>

            <Text style={styles.labele}>Estatura</Text>
            <TextInput value={estatura} placeholder="Ingrese su Estatura"
                       onChangeText={setEstatura} style={styles.inputText}/>

            <Text style={styles.labele}>Peso</Text>
            <TextInput value={peso} placeholder="Ingrese su Peso"
                       onChangeText={setPeso} style={styles.inputText}/>

            <View style={{flexDirection: 'row'}}>
                <View style={styles.div_btn}>
                    <Button title="Calcular" onPress={calculateIMC}/>
                </View>
                <View style={styles.div_btn}>
                    <Button title="Limpiar" onPress={limpiar}/>
                </View>
            </View>
            <Text>IMC: {imc}</Text>

            <Text style={styles.labele}>{msg}</Text>
            <StatusBar style="auto"/>
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
    labele: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputText: {
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 40,
        margin: 5,
    },
    div_btn: {
        justifyContent: 'space-between',
        marginRight: 10,

    }
});
