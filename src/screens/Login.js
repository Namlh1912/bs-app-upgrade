import React,{Component} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
}from 'react-native';
import LoginForm from '../components/Form/Login';
import logo from '../../assets/logo.png';

class Login extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={logo}
          />
          <Text style={styles.title}> Welcome to our app</Text>
        </View>
        <View>
          <LoginForm/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo:{
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  title:{
    color: '#ca212c',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
})

export default Login;