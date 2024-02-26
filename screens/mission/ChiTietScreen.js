import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChiTietScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={styles.text}>Nhiệm vụ 1</Text>
            <Text style={styles.text1}><FontAwesome name="calendar" size={13} color="red" /> 24/2/2024</Text>
            <Text style={styles.text1}>Mức độ: vừa</Text>
            <Text style={styles.text1}>Thưởng: +36 <AntDesign name="star" size={15} color="yellow" /></Text>

            <Text style={styles.text}>Mô tả :</Text>
            <View>
                <Text style={styles.text1}>
                    Để quản lý nhân sự hiệu quả, gia tăng năng suất làm việc thì không chỉ cần đến bản mô tả công việc mà còn phải ứng dụng phần mềm để tối ưu quy trình quản lý. Với phần mềm HRM 1Office, các doanh nghiệp sẽ được hỗ trợ bởi những tính năng ưu việt nhất kế thừa từ những thành tựu chuyển đổi số:
                </Text>
            </View>

            <View style={styles.button}>
            <TouchableOpacity onPress={()=> navigation.navigate('Doing')}>
                <Text style={styles.textButton}>Nhận</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default ChiTietScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 15,

    },
    text1: {
        marginLeft: 15,
    },
    button : {
        width :100,
        height : 40,
        backgroundColor : '#00A3FF',
        borderRadius : 20,
        justifyContent: 'center',
        marginLeft : 140,
        

    },
    textButton : {
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 20
        
    }

})