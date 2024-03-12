import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Mission from '../../components/Mission';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DoneScreen = () => {
  // const [completeTasks,setCompleteTasks] = useState([]);

  // useEffect(() => {
  //   getCompletedTask();
  // },[]);

  // const getCompletedTask = async () => {
  //   const completeTasksString = await AsyncStorage.getItem('completedTasks');
  //   if(completeTasksString) {
  //     const completeTasksData = JSON.parse(completeTasksString);
  //     setCompleteTasks(completeTasksData);
  //   }
  // }
  
  return (
//     <View style={styles.mission}>
// {/*       
//        <Text style={styles.textMission}>{title}</Text>
//             <Text style={styles.textcc}><FontAwesome name="calendar" size={13} color="red" /> {date}</Text>
//             <Text style={styles.textcc}>Mức độ: {level}</Text>
//             <Text style={styles.textcc}>Thưởng: {point} <Image source={require('../../assets/diem.png')}/></Text>

//              */}

        
//     </View>


 <View>
      {/* <Text>Completed Tasks:</Text> */}
      {/* {completeTasks.map((task, index) => (
        <Text key={index}>{task}</Text>
      ))} */}

      
    </View> 

    
    
  )
}

export default DoneScreen

const styles = StyleSheet.create({
  mission: {
    backgroundColor : '#fff',
        width: 350,
        height: 120,
        borderWidth : 1,
        borderColor : '#fff',
        margin : 15,
        borderRadius : 20,
  },
  textMission : {
    fontSize:24,
        fontWeight:'bold',
        marginLeft : 15,
        marginTop : 10,
  },
  textcc : {
    marginLeft : 15,
  }
})