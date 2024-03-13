import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React ,{useState}from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';


const ChiTietScreen = ({ route }) => {
    const navigation = useNavigation();
    // const { title, description, date, level, point } = route.params;

    const [showLottie, setShowLottie] = useState(false);

    const goToStatus = (status) => {
        setShowLottie(true);
    
        // Set a timeout to navigate to Status Screen after 2 seconds
        setTimeout(() => {
          setShowLottie(false);
          navigation.navigate('Doing', {title,description,date,level,point});
        }, 2000);
      };

    //   useFocusEffect(
    //     React.useCallback(()=> {
    //         console.log('Refreshing...');
    //     },[])
    //   )
      
    return (
        <View>
        
            {/* <Text style={styles.textMission}>{title}</Text>
            <Text style={styles.textcc}><FontAwesome name="calendar" size={13} color="red" /> {date}</Text>
            <Text style={styles.textcc}>Mức độ: {level}</Text>
            <Text style={styles.textcc}>Thưởng: {point} <Image
          source={require('../../assets/diem.png')}/></Text>
            <Text style={styles.textcc}>Mô tả: {description}</Text> */}
            <View style={styles.button}>
            <TouchableOpacity onPress={()=> goToStatus('Active')}>
            <Text style={styles.textbutton}>Nhận</Text>
            </TouchableOpacity>
            
            {showLottie && (
        <LottieView
          source={require('../../assets/done.json')}
          autoPlay
          loop={false} style={styles.lottie}
        />
      )}
        </View>
        </View>
        
    )
}

export default ChiTietScreen

const styles = StyleSheet.create({
    
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
    },
    lottie : {
        width: 200,
        height: 200,
        
    }

})