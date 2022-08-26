import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';

import TaskItem from './components/TaskItem.js';
import TaskInputField from './components/TextInputField.js';



export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) =>{
    if(task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) =>{
    setTasks(tasks.filter((value,index) => index != deleteIndex));
  }



  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Lista ToDo </Text>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>
        {
          tasks.map((task,index) => {
            return(
              <View key={index} style={styles.taskContainer}>
                <TaskItem index={index + 1} task={task} deleteTask={()=>deleteTask(index)}/>
              </View>
            );
          })
        }
      </ScrollView>
      <TaskInputField addTask = {addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c76e8'
  },
  heading: {
    color:'#fff',
    fontSize: 20,
    fontWeight: 600,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20
  }
});
