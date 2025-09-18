import {FlatList, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {getGrade} from '../services/GradeServices'
import {Avatar, FAB, ListItem} from '@rneui/base';
import {useState} from "react";

export const ListGrade = ({navigation}) => {

    const [time,setTime]=useState();
    const refreshList=()=>{
        setTime(new Date().getTime());
    }

    const ItemGrades = ({nota}) => {
        return <TouchableHighlight onPress={()=>{
            navigation.navigate('GradeForm', {notita:nota,fnRefresh:refreshList});
        }}>
            <ListItem bottomDivider>
                <Avatar
                    title={nota.subject.substring(0, 1)}
                    containerStyle={{backgroundColor: '#6733b9'}}
                />
                <ListItem.Content>
                    <ListItem.Title>{nota.subject}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Content>
                    <ListItem.Subtitle>{nota.grade}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron/>
            </ListItem>
        </TouchableHighlight>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={getGrade()}
                renderItem={({item}) => {
                    return <ItemGrades nota={item}/>
                }}
                keyExtractor={(item) => {
                    return item.subject
                }}
                extraData={time}
            />

            <FAB
                title="+"
                placement={"right"}
                onPress={() => {
                    navigation.navigate("GradeForm",{notita:null,fnRefresh:refreshList})
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
        justifyContent: 'center',
    },
});