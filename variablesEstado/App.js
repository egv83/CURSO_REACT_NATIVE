import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [contadorState,setContadorState] = useState(0);

  let contador = 0;
  let incrementar = ()=>{
    contador = contador+1;
    console.log("CONTADOR:",contador);
    if(contadorState < 10) {
      setContadorState(contadorState + 1);
    }else {
      Alert.alert("INFO","No puede ser mayor de 10");
    }
  }

  let decrementar = ()=>{
    if(contadorState>0) {
      setContadorState(contadorState - 1);
    }else{
      Alert.alert("INFO","No puede ser menor de 0");
    }
  }

  return (

    <View style={styles.container}>
      <Text>CONTADOR: {contador}</Text>
      <Text>CONTADOR ESTADO: {contadorState}</Text>
      <StatusBar style="auto" />

      <Button title="Incrementar" onPress={incrementar} />

      <Button title="Decrementare" onPress={decrementar} />
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
