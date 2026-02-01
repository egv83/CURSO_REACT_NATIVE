import {View, Text, StyleSheet} from "react-native";
import {Input, Icon, Button} from '@rneui/base';
import {useState} from "react";
import {guardar} from "../services/ProductosServices";


export const ProductoForm = () => {
    const [codigo, setCodigo] = useState(null);
    const [nombre, setNobre] = useState(null);
    const [precio, setPrecio] = useState(null);

    const guardarProducto = () => {
        console.log("GUARDAR PRODUCTO");
        guardar({
            codigo: codigo,
            nombre: nombre,
            precio: parseFloat(precio)
        });
        limpiar();
    }

    const limpiar = () => {
        setCodigo(null);
        setNobre(null);
        setPrecio(null);
    }

    return (<View style={styles.container}>

        <Input
            value={codigo}
            onChangeText={setCodigo}
            label="Código"
            keyboardType="numeric"
            leftIcon={
                <Icon
                    name='number'
                    size={24}
                    color='black'
                    type='octicon'
                />
            }
        />


        <Input
            value={nombre}
            onChangeText={setNobre}
            label="Nombre"
            leftIcon={
                <Icon
                    name='form'
                    size={24}
                    color='black'
                    type='antdesign'
                />
            }
        />

        <Input
            value={precio}
            onChangeText={setPrecio}
            label="Precio"
            keyboardType="numeric"
            leftIcon={
                <Icon
                    name='money'
                    size={24}
                    color='black'
                    type='fontAwesome'
                />
            }
        />

        <Button
            title="Guardar"
            onPress={guardarProducto}
        />

    </View>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        FlexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',  //eje principal
    },
});

