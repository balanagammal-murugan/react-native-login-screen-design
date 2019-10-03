import React, {Fragment} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';


const onClickListener = (viewId) => {
    if(viewId==='login'){
     Alert.alert("Alert", "Login pressed "); 
    }
  }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:3,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:3,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    },
    headingText: {
      color: '#00b5ec',
      marginBottom : '7%'
    }
  });

  
export default class Login extends React.Component{
   render() {
    return (
      <View style={styles.container}>
      <Image style={{width: 150, height: 150, marginBottom: '8%'}} source={{uri: 'https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png'}}/>
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://pngriver.com/wp-content/uploads/2017/12/download-Email-symbol-PNG-transparent-images-transparent-backgrounds-PNGRIVER-COM-4b8266_f0ef03475d104c6db271009986bdad0fmv2_d_1201_1201_s_2.png'}}/>
            <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
          </View>
          
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSclG9HUGL0fl6QDeQQfNXreiLdNTA9QEXChZz8bcKVL9AAztJE'}}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}/>
          </View>
  
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => onClickListener('login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>
  
          <TouchableHighlight style={styles.buttonContainer} onPress={() => onClickListener('restore_password')}>
              <Text>Forgot Password?</Text>
          </TouchableHighlight>
  
          <TouchableHighlight style={styles.buttonContainer} onPress={() => onClickListener('register')}>
              <Text>Register</Text>
          </TouchableHighlight>
        </View>
      );
    }

    
}