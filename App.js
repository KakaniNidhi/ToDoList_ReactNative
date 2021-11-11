import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Task from './components/Tasks';
//const taskItems = []
export default function App() {
  const [task, setTask]=useState();
  const [taskItems, setTaskItems]=useState([]);

  const handleAddTask=()=>{
    //console.log(task);
    Keyboard.dismiss();
   // taskItems.push(task);
    setTaskItems([...taskItems, task])
    setTask(null);
    //console.log(taskItems);
  }
    // setTask('');
    const completeTask=(index)=>{
      let itemsCopy=[...taskItems];
      itemsCopy.splice(index,1);
      setTaskItems(itemsCopy);
    }
  return (
    <View style={styles.container}>
      
    {/* today's Tasks */}
    <View style={styles.taskWrapper}>
      <Text stye={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index)=>{
              return (
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                  <Task  text={item} />
                </TouchableOpacity>
              )
            })
          }
          {/* <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>
          <Task text={'Task 3'}/>
          <Task text={'Task 4'}/>
          <Task text={'Task 5'}/>
          <Task text={'Task 6'}/>
          <Task text={'Task 7'}/> */}
        </View>
    </View>

  {/*Write a task */}

  <KeyboardAvoidingView
    //behaviour={Platform.OS==="android"?"padding":"height"}
    style={styles.writeTaskWrapper}>
    <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)}></TextInput>
    <TouchableOpacity onPress={()=>handleAddTask()}>
      <View style={styles.addWrapper}>
        <Text>+</Text>
      </View>
    </TouchableOpacity>
  </KeyboardAvoidingView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:30,
  },
  input:{
    padding:15,
    width:250,
    backgroundColor:"#FFF",
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:30,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:20,
    marginRight:20,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#FFF",
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
    marginRight:50,
  }
});
