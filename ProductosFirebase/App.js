import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

import {cargarConfiguracion} from "./app/utils/FirebaseConfig";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProductoForm} from "./app/screens/ProductoForm";

const Stack = createNativeStackNavigator();

export default function App() {
    cargarConfiguracion();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f17f5c',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen name="ProductosForm" component={ProductoForm}
                              options={{
                                  title: 'Formulario Producto'
                              }}
                />
            </Stack.Navigator>
        </NavigationContainer>
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
