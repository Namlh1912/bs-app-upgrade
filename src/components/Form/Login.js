import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, KeyboardAvoidingView} from 'react-native';
import {Button} from 'native-base';
import {connect} from 'react-redux';
import { authActions } from '../../redux/actions';

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => ({
  onLogin: (username,password) => {
    dispatch(authActions.login(username,password));
  },
});

class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUserLogin() {
    const {username, password} = this.state;
    console.log(username, password);
    if(username) {
      this.props.onLogin(username, password);
    }
  }

  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <TextInput
          placeholder="Username or email"
          placeholderTextColor="#000000"
          returnKeyType="next"
          onSubmitEditing={() => this.password.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChangeText={(value) => this.setState({username:value})}
          value={this.state.text}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#000000"
          secureTextEntry
          returnKeyType="go"d
          style={styles.input}
          ref={(ref) => { this.password = ref; }}
          onChangeText={(value) => this.setState({password:value})}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.login}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }

  login = () => {
    const username = this.state.username.toLowerCase();
    const password = this.state.password;
    this.props.onLogin(username, password);
  }
}

var styles = StyleSheet.create({
  container:{
    padding: 20,
  },
  input:{
    height:40,
    backgroundColor: 'rgba(192,192,192,0.3)',
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color:'#000000'

  },
  buttonContainer:{
    backgroundColor: 'rgba(202, 33, 44, 0.9)',
    paddingVertical: 15
  },
  buttonText:{
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
    fontSize: 18
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);