import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Button,
    Image,
    TextInput,
    Alert,
}from 'react-native';
// import ImagePicker from 'react-native-image-picker'

export default class UpdateScreen extends Component{
    state = {
        columns:2,
    }
      render(){
        const {navigate} = this.props.navigation;
          return(
             <View>
                 <View style={styles.container}>
                     <View style={styles.navBar}>
                         <Text style={styles.navBarButton}
                         onPress={() => navigate('Index', {})}
                         >Back</Text>
                     </View>
                  </View>
                  <Text style={styles.header}>Delete Product</Text>

                 
                  <View style={styles.maincontent}>
                         <Text style={styles.texts}>Name   </Text>
                         <TextInput
                            style={styles.textInput}
                            placeholder="product name"
                            underlineColorAndroid={'transparent'}/>
                  </View>

                    <View style={styles.footer}>
                        <Button
                            onPress={() => {Alert.alert('Product Successfully Deleted!');}}
                            title="   Delete    "
                        />
                        <Button
                        onPress={() => navigate('Index', {})}
                        title="Cancel"
                        />

                    </View>
             </View>
          );
      }

}

const styles = StyleSheet.create({
    container: {
        flex: 0,
    },
    navBar: {
        flexDirection: 'row',
        paddingTop: 10,
        height: 44,
        backgroundColor: '#1EAAF1'
      },
      navBarButton: {
        color: '#FFFFFF',
        textAlign:'center',
        width: 64
      },
      header: {
        fontSize: 24,
        textAlign:'center',
        marginBottom: 80,
        color: '#00b5ec',
        fontWeight: 'bold',
      },
      maincontent:{
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10,
      },
      textInput:{
        borderWidth:0.5,
        flex: 1,
        marginTop: 5,
        width: 50,
        height: 37,
      },
      texts:{
        marginTop: 8,
        textAlign: 'center',
        fontSize: 16,
      },
      footer:{
        textAlign:'center',
        flexDirection: 'row',
        paddingTop: 80,
        justifyContent: 'space-between',
        marginRight: 10,
        marginLeft: 10,
      }
});