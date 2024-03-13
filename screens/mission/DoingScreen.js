import { StyleSheet, Text, View ,Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Mission from '../../components/Mission';
const DoingScreen = ({route,navigation}) => {
  // const {title,description,date,level,point} = route.params;

  
  return (
    // <View style={styles.mission}> 

    // <Mission />
    // <TouchableOpacity onPress={()=>navigation.navigate('Done',{title,description,date,level,point})}>
    // {/* <Text style={styles.textMission}>{title}</Text>
    //         <Text style={styles.textcc}><FontAwesome name="calendar" size={13} color="red" /> {date}</Text>
    //         <Text style={styles.textcc}>Mức độ: {level}</Text>
    //         <Text style={styles.textcc}>Thưởng: {point} <Image source={require('../../assets/diem.png')}/></Text> */}
    // </TouchableOpacity>
      
    // </View>

    <View style={styles.container}>
      
        <View>
            <ScrollView>
            <Mission />
            </ScrollView>
            
            
          
        </View>
      
    </View>
  )
}

export default DoingScreen

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMission: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
},
textcc: {
    marginLeft: 15,
    fontSize: 15,
},
mission: {
  backgroundColor : '#fff',
        width: 350,
        height: 120,
        borderWidth : 1,
        borderColor : '#fff',
        margin : 15,
        borderRadius : 20,
}
})