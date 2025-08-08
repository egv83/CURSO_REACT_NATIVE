import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Button title="Comp 1" />
      <Button title="Comp 2" color='green' />
      <Button title="Comp 3" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /*COLUMN*/
    flexDirection: 'column', // eje principal -> vertical
    justifyContent: 'center', // afecta al eje principal (vertical)
    //alignItems:'center' //afecta al eje secundario (horizontal)
    //justifyContent: 'flex-start', //afecta al eje principal (vertical)
    //alignItems:'stretch' //afecta al eje secundario (horizontal)

    /*row*/
    /*flexDirection: 'row', // eje principal -> horizontal
    justifyContent: 'center', // afecta al eje principal (horizontal)
    alignItems:'center' //afecta al eje secundario (vertical)
    justifyContent: 'flex-start', //afecta al eje principal (horizontal)
    alignItems:'flex-end' //afecta al eje secundario (vertical)*/


  },
});
