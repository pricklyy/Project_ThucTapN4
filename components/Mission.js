import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Mission = () => {
    const navigation = useNavigation();
  return (
    <View style= {styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate('Detail')}>   
      <View style={styles.mission}>
            <Text style={styles.textMission}>Nhiệm vụ 1</Text>
            <Text style={styles.textcc}><FontAwesome name="calendar" size={13} color="red" /> 24/2/2024<Text>       Mức độ : dễ      </Text><Text>+36</Text> <AntDesign name="star" size={15} color="yellow" />    <Image src=''/></Text>
        </View>

        
      </TouchableOpacity>

      
      
      
        
      
    </View>
  )
}

export default Mission

const styles = StyleSheet.create({
    container:  {
        flex : 1,
        
    },
    mission : {
        backgroundColor : '#fff',
        width: 350,
        height: 70,
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