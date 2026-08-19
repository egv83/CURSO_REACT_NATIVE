import {View, Text, StyleSheet, FlatList} from "react-native";
import {Button, FAB} from "@rneui/base";

import {consultar} from "../services/ProductosServices";
import {useEffect, useState} from "react";

export const ListaProductos = ({navigation}) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        /*ACCIÓN DE REPINTADO DE LA PAGINA, CON [] HACE QUE NO SE RECARGE CADA RATO*/
        recuperarProductos();
        console.log("LISTA PRODUCTOS con usEffect");
    }, []);

    const recuperarProductos = () => {
        console.log("RECUPERAR PRODUCTOS");
        consultar(setProductos);
    }

    const ItemProductos = ({item}) => {
        return (
            <View style={styles.products}>
                <View style={styles.productCode}>
                    <Text>{item.codigo}</Text>
                </View>
                <View style={styles.productDetails}>
                    <Text style={styles.productText}>{item.nombre}</Text>
                    <Text style={styles.productPrice}>{item.precio}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LISTA PRODUCTOS</Text>
            {/*<Button*/}
            {/*    style={styles.loadButton}*/}
            {/*    title="Cargar Productos"*/}
            {/*    onPress={recuperarProductos}*/}
            {/*/>*/}

            <FlatList
                style={styles.list}
                data={productos}
                renderItem={({item}) => {
                    return (
                        <ItemProductos item={item} />
                    );
                }}
                keyExtractor={(item) => {
                    return item.codigo
                }}
            />
            <FAB
                title="+"
                placement="right"
                onPress={() => {
                    navigation.navigate("ProductosForm",{fnRenderList:recuperarProductos});
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },

    title:{
        margin: 5,
        marginLeft:20
    },

    loadButton:{
        margin:5,
        paddingLeft:40,
        paddingRight:40,
        padding:5
    },

    list: {
        // backgroundColor: 'lightpink',
        // flex: 1,
        flexDirection: 'column',
        // alignItems: 'stretch',
        // justifyContent: 'flex-start',
        marginBottom: 50,
    },

    products:{
        // backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },

    productCode:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    productDetails:{
        flex:2,
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'flex-end',
        // paddingLeft: 10,
    },

    productText:{
        // backgroundColor: 'yellow',
        paddingTop: 3,
        paddingHorizontal: 5,
        // marginBottom: 1,
        fontSize: 16,
    },

    productPrice:{
        // backgroundColor: 'orange',
        // paddingTop: 3,
        // paddingHorizontal: 5,
        alignItems: 'flex-end',
        fontSize: 16,
        fontFamily: 'italic',
        color: 'red',
    }

});