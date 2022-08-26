import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Platform, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const textInputField = (props) =>{
    const [task, setTask] = useState();

    const handleAddTask = (value) =>{
        props.addTask(value);
        setTask(null);
    }

    return(
        <KeyboardAvoidingView behaivor={Platform.OS === "ios" ? "padding" : "Height"} style={styles.container}>
            <TextInput style={styles.inputField} value={task} onChangeText={text => setTask(text)} placeholder={"insira uma tarefa"} placeholderTextColor={"#fff"}/>
                <TouchableOpacity onPress={()=> handleAddTask(task)}>
                    <View style={styles.button}>
                        <MaterialIcons name="keyboard-arrow-up" size={24} color="black"/>
                    </View>
                </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container:{
        bolderColor: "#fff",
        backgroundColor: "##0c76e8",
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20
    },
    inputField: {
        color:'#fff',
        height: 50,
        flex: 1
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default textInputField;