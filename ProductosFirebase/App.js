import "react-native-gesture-handler";

import {StyleSheet, Text, View} from 'react-native';

import {cargarConfiguracion} from "./app/utils/FirebaseConfig";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProductoForm} from "./app/screens/ProductoForm";
import {ListaProductos} from "./app/screens/ListaProductos";
import { LoginFrom } from './app/screens/Login';
import { RegistroForm } from './app/screens/RegistroForm';
import { CambioClaveForm } from './app/screens/CambioClaveForm';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Feather from 'react-native-vector-icons/Feather';
import { Icon} from "@rneui/base";

import { ContenidoA } from "./app/screens/ContenidoA";
import { ContenidoB } from "./app/screens/ContenidoB";
import { CerrarSesion } from "./app/screens/CerrarSesion";

const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const drawer = createDrawerNavigator();
const tabs = createBottomTabNavigator();

const TabNav=()=>{
    return(
        <tabs.Navigator>
            <tabs.Screen
                name="ContenidoATab"
                component={ContenidoA}
                options={{
                    headerShown:false,  /* Permite deshabiltar el header  */
                    tabBarLabel: "Config",
                    tabBarIcon:({size,tintColor})=>{
                        return( 
                        <Icon
                            name='settings'
                            size={size}
                            color={tintColor}
                            type='feather'
                        />)
                    }
                }}
            />

            <tabs.Screen
                name="ContenidoBTab"
                component={ContenidoB}
                options={{
                    headerShown:false,  /* Permite deshabiltar el header  */
                    tabBarLabel: "Acerca de",
                    tabBarIcon:({size,tintColor})=>{
                        return( 
                        <Icon
                            name='question'
                            size={size}
                            color={tintColor}
                            type='antdesign'
                        />)
                    }
                }}
            />
        </tabs.Navigator>
    )
}

const LoginNav=()=>{
    return <LoginStack.Navigator>
        <LoginStack.Screen
            name="LoginNavigation"
            component={LoginFrom}
            options={{
                headerShown:false  /* Permite deshabiltar el header  */
            }}
        />

            {/* SE AGREGA OTRO STACK PARA EL REGISTRO DE USUARIO */}
        <LoginStack.Screen
            name='RegistroNavigation'
            component={RegistroForm}
            options={{
                headerShown: false,
            }}
        />

        <LoginStack.Screen
            name='CambiarClaveNavigation'
            component={CambioClaveForm}
            options={{
                headerShown: false,
            }}
        />
    </LoginStack.Navigator>
}

const DrawerNav=()=>{

    return (
        <drawer.Navigator>

            <drawer.Screen 
                name="DrawerProductosNav" 
                component={ProductosNav}
                options={{
                    title: 'Productos'
                }}
            />


            <drawer.Screen 
                name="DrawerTabsNav" 
                component={TabNav}
                options={{
                    title: 'Ejemplo Tabs'
                }}
            />

            <drawer.Screen 
                name="DrawerSesionNav" 
                component={CerrarSesion}
                options={{
                    title: 'Finalizar sesión'
                }}
            />

        </drawer.Navigator>
    )

}

// const RegObserver=()=>{

//     const auth = getAuth();
//     if(!global.desSuscriveOserver){
//         global.desSuscriveOserver = onAuthStateChanged(auth, (user) => {
//         if (user) {
//             // User is signed in, see docs for a list of available properties
//             // https://firebase.google.com/docs/reference/js/auth.user
//             const uid = user.uid;


//             console.log("Observer STATUS: SIGN IN!!",uid);
//         } else {
//             // User is signed out
//             // ...
//             console.log("Observer STATUS: SIGN OUT!!");
//         }
//         });
//     }
// }

const ProductosNav=()=>{
        return <Stack.Navigator
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
                <Stack.Screen name="ListaProductosForm" component={ListaProductos}
                              options={{
                                  title: 'Lista de Productos'
                              }}
                />

                <Stack.Screen name="ProductosForm" component={ProductoForm}
                              options={{
                                  title: 'Formulario Producto'
                              }}
                />


            </Stack.Navigator>
    }

export default function App() {
    const [login,setLogin] = useState(false);
    
    const RegObserver=()=>{
        const auth = getAuth();
        if(!global.desSuscriveOserver){
            global.desSuscriveOserver = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;

                console.log("Observer STATUS: SIGN IN!!",uid);
                setLogin(true);
            } else {
                // User is signed out
                // ...
                console.log("Observer STATUS: SIGN OUT!!");
                setLogin(false);
            }
            });
        }
    }


    cargarConfiguracion();
    RegObserver();
    

    return (
        <NavigationContainer>
            {/* <ProductosNav/> */}
                {/* {login?<ProductosNav/>:<LoginNav/>} {/* Es un IF ternario y trabaja directo con PRODUCTSNAV */}
                {login?<DrawerNav/>:<LoginNav/>} {/* PARA TRABAJAR CON DRAWER */}

            {/* <LoginNav/> */}
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
