import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {

  const [nombre,setNombre] = useState();
  const [apellido,setApellido] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>EJEMPLO MARGIN</Text>
      <TextInput value={nombre} onChangeText={setNombre} placeholder="Ingrese su Nombre" style={styles.caja}/>
      <TextInput value={apellido} onChangeText={setApellido} placeholder="ingrese su Apellido" style={styles.caja}/>

      <Button title="OK" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column', //eje principal -> vertical
    justifyContent: 'center', //afecta al eje principal (vertical)
    alignItems:'stretch', //afecta al eje secundario (horizontal)
    paddingHorizontal:10,
  },
  caja:{
    borderColor: "green",
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10,
    marginBottom:10,
  },
  titulo:{
    fontSize:12,
    marginBottom:10,
    fontWeight:'bold',
  }
});
