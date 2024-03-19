import { StyleSheet, Text, View ,Image, TouchableOpacity, ScrollView,TextInput} from 'react-native'
import React,{useContext,useState} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Mission from '../../components/Mission';
import { NhiemVuContext } from '../../components/NhiemVuContext';
const DoingScreen = ({route,navigation}) => {
  // const {title,description,date,level,point} = route.params;

  const { item } = route.params || {};
  const { nhiemVu, xoaNhiemVu, luuNhiemVuHoanThanh } = useContext(NhiemVuContext);
  const [moTa, setMoTa] = useState('');
  
  const handleHoanThanh = () => {
    if (moTa.trim() !== '') {
      // Xử lý nhiệm vụ đã hoàn thành với mô tả
      luuNhiemVuHoanThanh({ ...nhiemVu, moTa });
      xoaNhiemVu();
      setMoTa('');
    }
  };
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

    
    // <View style={styles.container}>
      
    //     <View>
    //         <ScrollView>
    //         {/* <Mission /> */}
    //         <Text>{item&&item.tenNV}</Text>
    //         </ScrollView>
            
            
          
    //     </View>
      
    // </View>

    <View>
    {nhiemVu ? (
      <View>
        <Text style={styles.textMission}>{item && item.tenNV}</Text>
            
            <Text style={styles.textcc}>Mô tả: {item&&item.moTa}</Text>
        {/* Hiển thị thông tin nhiệm vụ đang làm */}
        <TextInput
        style={styles.input}
          placeholder="Nhập mô tả"
          value={moTa}
          onChangeText={(text) => setMoTa(text)}
        />
        <TouchableOpacity onPress={handleHoanThanh} style={styles.button}>
          <Text style={styles.textbutton}>Hoàn thành</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <Text style={styles.textcc}>Không có nhiệm vụ đang làm</Text>
    )}
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
},
input : {
  width: 370,
  height:50,
  backgroundColor:'#fff',
  borderRadius: 20,
  borderWidth: 0.1,
  marginLeft: 15,
},
button : {
  backgroundColor: '#0094ff',
        width:100,
        height: 40,
        borderRadius : 20,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:140,
        marginTop: 20,
},
textbutton : {
  color:'#fff',
  fontWeight:'bold',
  fontSize:15,
}
})