import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, ScrollView } from 'react-native'
import { isValidEmail, isValidPassword } from '../../validate/Validations'



const Login = (props) => {
    console.log(props);
    const { navigation } = props;

    //validate
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    //states email pass
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isValidationOK = () => email.length > 0 && password.length > 0
        && isValidEmail(email) == true
        && isValidPassword(password) == true

    return (
        <ScrollView
            style={{
                opacity: 50
            }}>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                <View
                    style={{
                        height: 150,
                        width: 150,
                        backgroundColor: '#5daef2',
                        borderRadius: 750,
                        top: -75,
                        left: 150
                    }} />
                <View
                    style={{
                        height: 300,
                        width: 300,
                        backgroundColor: '#0d0dd9',
                        borderRadius: 150,
                        top: -100,
                        left: -200
                    }}>
                    <Text
                        style={[styles.txt, {
                            top: 150,
                            left: 60,
                            color: 'white'
                        }]}>Xin Chào,{'\n'}     Mời đăng nhập</Text>
                </View>

            </View>

            {/* View textinput tài khoản mật khẩu */}
            <View
                style={{
                    flex: 2,
                }}>
                <Text
                    style={styles.txt}>Tài Khoản</Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorEmail(isValidEmail(text) == true ? '' :
                            '* Tài khoản phải là email')
                        setEmail(text)
                    }}
                    style={styles.txtInput}
                    placeholder='example@gmail.com' />
                <Text
                    style={{
                        marginLeft: 10,
                        color: 'red'
                    }}>{errorEmail}</Text>

                <Text style={[styles.txt, { marginTop: 5 }]}>Mật khẩu</Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorPassword(isValidPassword(text) == true ? '' :
                            '* Mật khẩu phải có 6 ký tự')
                        setPassword(text)
                    }}
                    style={styles.txtInput}
                    secureTextEntry={true}
                    placeholder='Mật khẩu có 6 kí tự trở lên' />
                <Text
                    style={{
                        color: 'red',
                        marginLeft: 10,
                    }}>{errorPassword}</Text>

                <TouchableOpacity
                    onPress={() => navigation.replace('MainContainer')}

                    disabled={isValidationOK() == false}
                    style={[styles.btnLogin, {
                        backgroundColor: isValidationOK() == true ? 'blue' : 'rgba(0,0,0,0.5)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 30,
                        borderRadius: 15
                    }]}>
                    <Text style={[styles.txt,
                    {
                        fontSize: 24,
                        marginRight: 10,
                        color: 'white',
                    }
                    ]}>Đăng nhập</Text>
                </TouchableOpacity>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}>
                        <Text
                            style={{
                            }}>Chưa có tài khoản, đăng ký ở đây</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}

export default Login

const styles = StyleSheet.create({
    txtInput: {
        borderWidth: 2,
        marginHorizontal: 10,
        height: 60,
        borderRadius: 5,
        paddingHorizontal: 10
    },
    txt: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10
    },
    btnLogin: {
        margin: 10,
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10
    }
});