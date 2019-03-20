import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

export default class RenewPassword extends Component {

    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      }
    }

    componentDidMount(){
      this._loadInitialState().done();
    }
    _loadInitialState = async () => {
      var value = await AsyncStorage.getItem('users');
      if(value !== null){
        this.props.navigation.navigate('Login');
      }
    }
  
    render() {
        const {navigate} = this.props.navigation;
      return (

        <View style={styles.container}>

          <Text style={styles.header}>- Renew Password -</Text>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Username"
                underlineColorAndroid={'transparent'}
                onChangeText={(username) => this.setState({username})}/>
          </View>

          <View style={styles.inputContainer}>
            
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid={'transparent'}
                onChangeText={(password) => this.setState({password})}/>
          </View>
          <TouchableHighlight style={[styles.buttonContainer, styles.updateButton]} onPress={this.update}>
            <Text style={styles.updateText}>Update Password</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonContainer} onPress={() => navigate('Login', {})}>
              <Text>Go Back</Text>
          </TouchableHighlight>
  
        </View>
      );
    }
    update = () => {
      
      fetch('http://192.168.0.103:3000/users',
      {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      })

      .then((response) => response.json())
      .then ((res) =>{

        if (res.success === true){
          AsyncStorage.setItem('users', res.users);
          this.props.navigation.navigate('Login');
        }
        else{
          alert(res.message);
        }
      })
      .done();
    }
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    header: {
      fontSize: 24,
      marginBottom: 60,
      color: '#00b5ec',
      fontWeight: 'bold',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
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
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    updateButton: {
      backgroundColor: "#00b5ec",
    },
    updateText: {
      color: 'white',
    }
  });