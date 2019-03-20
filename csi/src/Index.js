import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    FlatList,
    Dimensions,
}from 'react-native';
import ListItem from './ListItem'

const ITEM_WIDTH = Dimensions.get('window').width

export default class IndexScreen extends Component{
    state = {
        columns:2
    }
      render(){
        const {navigate} = this.props.navigation;
          const {columns} = this.state
          return(
             <View>
                 <View style={styles.container}>
                     <View style={styles.navBar}>
                         <Text style={styles.navBarButton}
                            onPress={() => navigate('Add', {})}
                         >ADD</Text>
                         <Text style={styles.navBarButton}
                         onPress={() => navigate('Update', {})}
                         >UPDATE</Text>
                         <Text style={styles.navBarButton}
                            onPress={() => navigate('Delete', {})}
                         >DELETE</Text>
                         <Text style={styles.navBarButton}></Text>
                         <Text style={styles.navBarLogoutButton}
                            onPress={() => navigate('Login', {})}
                         >Logout</Text>
                     </View>
                 </View>
                 <View style={styles.searchBar}>
                     <TextInput
                     style={styles.searchInput}
                      placeholder="Search..."
                      underlineColorAndroid={'transparent'}/>
                      <Text 
                      style={styles.searchButton}
                            // onPress={() => navigate('Delete', {})}
                         >GO</Text>
                 </View>
                 
            <FlatList
            numColumns={columns}
            data={[
                require("./../images/Acer-Aspire-E3.jpg"),
                require("./../images/Acer-Aspire-V5.jpg"),
                require("./../images/HP-ProBook-4330s.jpg"),
                require("./../images/HP-ProBook-6465b.jpg"),
                require("./../images/Sony-VAIO-EB2.jpg"),
            ]}
            renderItem={({item})=>{
                return <ListItem itemWidth={ITEM_WIDTH/columns} image={item}/>
            }}
            keyExtractor={
                (index)=>{return index}
            }
            />
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
        fontWeight: 'bold',
        width: 64
      },
      navBarLogoutButton: {
        color: '#FFFFFF',
        textAlign:'center',
        width: 64
      },
    image: {
        flex: 1,
        aspectRatio: 1.5, 
        resizeMode: 'cover',
      },
      searchBar:{
        flexDirection: 'row',
      },
      searchButton:{
         paddingTop: 15,
         paddingRight: 10,
         textAlign:'center',
         width:70,
      },
      searchInput:{
        marginTop: 5,
        marginLeft: 3,
        borderWidth:0.5,
        borderRadius:70,
        flex: 1,
        height:40
     }
      
});