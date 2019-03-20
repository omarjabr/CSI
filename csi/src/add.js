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
import ImagePicker from 'react-native-image-picker'

export default class AddScreen extends Component{
    state = {
        columns:2,
    }
    state = {
        photo: null,
      }
    handleChoosePhoto = () => {
        const options = {
          noData: true,
        }
        
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            this.setState({ photo: response })
          }
        })
      }
      render(){
        const {navigate} = this.props.navigation;
        const { photo } = this.state;
          return(
             <View>
                 <View style={styles.container}>
                     <View style={styles.navBar}>
                         <Text style={styles.navBarButton}
                         onPress={() => navigate('Index', {})}
                         >Back</Text>
                     </View>
                  </View>
                  <Text style={styles.header}>ADD Product</Text>

                 
                  <View style={styles.maincontent}>
                         <Text style={styles.texts}>Name   </Text>
                         <TextInput
                            style={styles.textInput}
                            placeholder="product name"
                            underlineColorAndroid={'transparent'}/>
                  </View>

                  <View style={styles.maincontent}>
                         <Text style={styles.texts}>Brand   </Text>
                         <TextInput
                            style={styles.textInput}
                            placeholder="brand name"
                            underlineColorAndroid={'transparent'}/>
                  </View>
                  
                  <View style={styles.maincontent}>
                         <Text style={styles.texts}>Model Number   </Text>
                         <TextInput
                            style={styles.textInput}
                            placeholder="model number"
                            underlineColorAndroid={'transparent'}/>
                  </View>

                  <View style={styles.maincontent}>
                         <Text style={styles.texts}>Memory   </Text>
                         <TextInput
                            style={styles.textInput}
                            placeholder="memory"
                            underlineColorAndroid={'transparent'}/>
                  </View>

                  <View style={styles.maincontent}>
                         <Text style={styles.texts}>CPU   </Text>
                         <TextInput
                            style={styles.textInput}
                            placeholder="cpu"
                            underlineColorAndroid={'transparent'}/>
                  </View>
                  <View style={styles.imgUploag}>
                    {photo && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={{ width: 30, height: 30 }}
                        />
                        )}
                        {/* onPress={this.handleChoosePhoto} */}
                    <Button title="Choose Photo"  />
                    </View>

                    <View style={styles.footer}>
                        <Button
                        onPress={() => {Alert.alert('Product Successfully Added!');}}
                            title="   ADD    "
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
      imgUploag:{
        marginTop: 5,
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center', 
        justifyContent: 'center'
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