import {StatusBar} from 'expo-status-bar';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

let productos = [
    {nombre: "Leche 1L", categoria: "Lacteos", precioCompra: 0.40, precioVenta: 0.95, id: 1},
    {nombre: "Creama de leche 1L", categoria: "Lacteos", precioCompra: 2.20, precioVenta: 3.15, id: 2},
    {nombre: "Salchicha de carne 1kg", categoria: "Embutidos", precioCompra: 1.90, precioVenta: 2.85, id: 3},
    {nombre: "Atun aceite 120g", categoria: "Enlatados", precioCompra: 1.00, precioVenta: 1.50, id: 4},
    {nombre: "Sardina tomate 200g", categoria: "Enlatados", precioCompra: 1.80, precioVenta: 2.99, id: 5},
    {nombre: "Quintuple uva 1L", categoria: "Bebidas azucaradas", precioCompra: 0.30, precioVenta: 0.50, id: 6},
    {nombre: "Pepsi 1L", categoria: "Bebidas azucaradas", precioCompra: 0.30, precioVenta: 0.50, id: 7},
    {nombre: "Papel higienico familia rojo 6 rollos", categoria: "Prodcuto de aseo", precioCompra: 0.50, precioVenta: 1.00, id: 8},
];

let isNew = true;

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PRODUCTOS</Text>

            <View style={styles.productForm}>
                <TextInput
                    style={styles.productInput}
                    placeholder='Código'
                />

                <TextInput
                    style={styles.productInput}
                    placeholder='Nombre'
                />

                <TextInput
                    style={styles.productInput}
                    placeholder='Categoria'
                />

                <TextInput
                    style={styles.productInput}
                    placeholder='Precio'
                />

                <TextInput
                    style={[
                        styles.productInput,
                        styles.staticDisableEdition
                    ]}
                    placeholder='Precio venta'
                    editable={false}
                />

                <View style={styles.buttonSection}>
                    <Button title='Nuevo'/>
                    <Button title='Guardar'/>
                    <Text>Total productos: </Text>
                </View>

            </View>

            <FlatList style={styles.list}
                      data={productos}
                      renderItem={(obj) => {
                          return (
                              <View style={styles.item}>
                                  <Text>{obj.item.nombre} ({obj.item.categoria})</Text>
                                  <Text style={styles.price}>${obj.item.precioVenta}</Text>
                              </View>
                          );
                      }}
                      keyExtractor={(obj) => {
                          return obj.id;
                      }}
            />

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingTop: 5,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 30,
        marginBottom:40,
        marginRight:3,
        marginLeft:3,
    },
    staticDisableEdition:{
        color: '#999',
        backgroundColor: 'lightgray',
    },
    list: {
        // backgroundColor: 'pink'
    },
    item:{
        borderWidth:2,
        borderColor: 'darkgray',
        borderRadius: 5,
        backgroundColor: 'lightcyan',
        flexDirection: 'column',
        padding:10,
        marginBottom:4
    },
    title:{
        fontFamily: 'serif',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center',
        paddingBottom: 5
    },
    price:{
        fontFamily: 'serif',
        fontWeight:"bold",
        color:'red',
    },
    productForm:{
        borderColor:'lightgray',
        borderWidth:1,
        flexDirection: 'column',
        padding:5,
        marginBottom:3
    },
    productInput:{
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom:5,
        borderRadius:5
    },
    buttonSection:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around',
    }
});
