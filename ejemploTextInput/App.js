import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';

export default function App() {

  const [nombre,setNombre] = useState("Nombre");
  const [apellido,setApellido] = useState("Apellido");

  return (
    <View style={styles.container}>
      <Text>Ejemplo Text Imput</Text>
      <TextInput
          value={nombre}
          style={styles.caja}
          onChangeText={setNombre}
      />

      <TextInput
          value={apellido}
          style={styles.caja}
          onChangeText={(txt)=>{
            if(txt.includes("a")) {
              Alert.alert("INFO","No se permite le letra a");
            }else {
              setApellido(txt);
            }
          }}
      />

      <Button title="SALUDAR"
        onPress={()=>{
          Alert.alert("SALUDO","Bienvenido "+nombre+" "+apellido);
        }}
      />

      <Text>Bienvenido: {nombre} {apellido}</Text>

      <StatusBar style="auto" />
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
  caja:{
    borderColor: "black",
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10
  }
});
