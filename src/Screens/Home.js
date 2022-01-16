import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Task from './Task';
import { BottomSheet } from 'react-native-elements/dist/bottomSheet/BottomSheet';

const Home = () => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
  
    const handleAddTask = () => {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task])
      setTask(null);
    }
  
    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy)
    }

    
    return (
        <View style={styles.container}>
             {/* Scroll view when list gets longer than page */}
            <ScrollView
                contentContainerStyle={{
                flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >


            {/* Today's Medications */}
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's Medications</Text>
                <View style={styles.items}>
                {/* This is where the Medications entered by the user will go! */}
                {
                    taskItems.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                        <Task text={item} /> 
                        </TouchableOpacity>
                    )
                    })
                }
                </View>
            </View>
        
      </ScrollView>
      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: "#FF6961",
        alignItems: "center",
        paddingTop: 70,
        paddingBottom: 20,
    },
    sectionTitle: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold"
    },
    tasksWrapper: {
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
      },
      addText: {},
});

export default Home;