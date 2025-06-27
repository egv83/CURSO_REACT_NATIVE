import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';

export default function App() {
  let nombreBoton = "Boton";
  let saludar=()=>{
    Alert.alert("INFO","Hola my friendw");
  }

  return (
    <View style={styles.container}>
      <Text>EJEMPLO BOTON</Text>
      <StatusBar style="auto" />

      <Button title='ok' onPress={saludar}/>
      <Button title={nombreBoton}
          onPress={()=>{
                Alert.alert("INFO", "Bienvenido")
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
});
