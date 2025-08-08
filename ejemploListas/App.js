import {StatusBar} from 'expo-status-bar';
import {Alert, Button, FlatList, Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';

let personas = [
    {nombre: 'Esteban', apellido: 'Vallejo', cedula: '1003195664'},
    {nombre: 'Ivonne', apellido: 'Recalde', cedula: '1003158894'},
    {nombre: 'Emilia', apellido: 'Vallejo', cedula: '1003150455'}
];

let esNuevo = true; //indica si se crea un nuevo dato o se modifica
let personaSelected = -1; //para almacenat el index del elemento seleccionado de la lista

export default function App() {

    const [txtCedula, setTxtCedula] = useState('');
    const [txtNombre, setTxtNombre] = useState('');
    const [txtApellido, setTxtApellido] = useState('');
    const [numElementos, setNumElementos] = useState(personas.length);

    let ItemPersona = ({indice,persona}) => {
        return (
            <View style={styles.itemPersona}>

                <View style={styles.itenIndice}>
                    <Text>{indice}</Text>
                </View>

                <View style={styles.itemContenido}>
                    <Text style={styles.textoPrincipal}> {persona.nombre} {persona.apellido}</Text>
                    <Text style={styles.textoSecundario}>{persona.cedula}</Text>
                </View>
                <View style={styles.itemBotones}>
                    <Button title='E' color='green'
                            onPress={() => {
                                setTxtCedula(persona.cedula);
                                setTxtNombre(persona.nombre);
                                setTxtApellido(persona.apellido);
                                esNuevo = false;
                                personaSelected = indice;
                                console.log("INDEX: ", personaSelected)
                            }}/>
                    <Button title='X' color='darkred'
                            onPress={() => {
                                personaSelected = indice;
                                personas.splice(personaSelected, 1);
                                console.log("ARREGLO PERSONAS: ", personas);
                                setNumElementos(personas.length);
                            }}
                    />
                </View>
            </View>
        );
    }

    let limpiar = () => {
        Keyboard.dismiss(); //cierra el teclado
        setTxtCedula(null);
        setTxtNombre(null);
        setTxtApellido(null);
        esNuevo = true;
    }

    let personExists = () => {
        for (let i = 0; i < personas.length; i++) {
            if (personas[i].cedula === txtCedula) {
                return true;
            }
        }
        return false;
    }

    let validateInput = () => {
        if (txtCedula === '' || txtNombre === '' || txtApellido === '') {
            return true;
        }
        return false;
    }

    let guardarPersona = () => {
        if (esNuevo) {
            if (personExists()) {
                Alert.alert('INFO', "Ya existe un persona con la misma cedula: " + txtCedula);
            } else {
                if (validateInput()) {
                    Alert.alert('INFO', 'Ingrese todos los campos');
                } else {
                    let persona = {nombre: txtNombre, apellido: txtApellido, cedula: txtCedula};
                    personas.push(persona);
                    // console.log("GUARDANDO: ", persona);
                    // console.log("PERSONAS: ", personas);
                }
            }
        } else {
            console.log("MODIFICAR: ", personaSelected);
            personas[personaSelected].nombre = txtNombre;
            personas[personaSelected].apellido = txtApellido;
        }
        limpiar();
        setNumElementos(personas.length);
    }

    return (
        <View style={styles.container}>
            <View style={styles.areaCabecera}>
                <Text>PERSONAS</Text>
                <TextInput style={
                    //SE ENVIA COMO ARRAY LOS ESTILOS, EL SEGUNDO EDITA EL ESTILO CUANDO ES NUEVO O EDITAR CAMBIA EL TONO
                    [
                        styles.txtInput,
                        {
                            color: esNuevo ? 'black' : '#999',
                            backgroundColor: esNuevo ? 'lightblue' : '',
                        }
                    ]
                }
                           value={txtCedula}
                           placeholder={'Ingrese su cedula'}
                           onChangeText={setTxtCedula}
                           keyboardType={'numeric'}
                           editable={esNuevo}
                />
                <TextInput style={styles.txtInput}
                           value={txtNombre}
                           placeholder={'Ingrese su nombre'}
                           onChangeText={setTxtNombre}
                />
                <TextInput style={styles.txtInput}
                           value={txtApellido}
                           placeholder={'Ingrese su apellido'}
                           onChangeText={setTxtApellido}
                />
                <View style={styles.buttonsArea}>
                    <Button
                        title='Guardar'
                        onPress={() => {
                            guardarPersona()
                        }}
                    />
                    <Button
                        title='Nuevo'
                        onPress={() => {
                            limpiar();
                        }}
                    />
                </View>
                <Text>Elementos: {numElementos}</Text>
            </View>

            <View style={styles.areaContenido}>
                <FlatList
                    style={styles.lista}
                    data={personas}
                    renderItem={({index,item}) => {
                        //AQUI SE PONE LO QUE VA A MOSTRAR REDERISANDO
                        return <ItemPersona
                            indice={index}
                            persona={item}
                        />
                    }}
                    keyExtractor={obj => obj.cedula}
                />
            </View>
            <View style={styles.areaPie}>
                <Text>Autor: Esteban Vallejo</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingTop: 50,
        paddingHorizontal: 10,
        paddingBottom: 50,
    },
    lista: {
        // backgroundColor: 'lightpink',
    },
    itemPersona: {
        backgroundColor: 'palegreen',
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row'
    },
    textoPrincipal: {
        fontSize: 20,
    },
    textoSecundario: {
        fontStyle: 'italic',
        fontSize: 14
    },
    areaCabecera: {
        flex: 3.5,
        // backgroundColor: 'chocolate',
        paddingLeft: 5,
        paddingRight: 5
    },
    areaContenido: {
        flex: 9,
        // backgroundColor: "magenta"
    },
    areaPie: {
        flex: 1,
        // backgroundColor: "mediumpurple",
        justifyContent: "center",
        alignItems: "center",
    },
    itenIndice: {
        // backgroundColor:"darkgray",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    itemContenido: {
        // backgroundColor:'darkorange',
        flex: 6,
        paddingLeft: 5
    },
    itemBotones: {
        flexDirection: 'row',
        // backgroundColor:'darkgray',
        flex: 2,
        alignItems: 'center',
        justifyContent: "space-between"
    },
    txtInput: {
        borderWidth: 1,
        borderColor: 'darkgrey',
        paddingTop: 3,
        paddingHorizontal: 5,
        marginBottom: 5
    },
    buttonsArea: {
        flexDirection: 'row',
        justifyContent: "space-evenly"
    }
});
