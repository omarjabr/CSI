import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    FlatList,
    TouchableWithoutFeedback,
    Animated,
}from 'react-native';

export default class ListItem extends Component{

        state = {
            animatePress: new Animated.Value(1)
        }
        animateIn(){
            Animated.timing(this.state.animatePress, {
                toValue: 0.8,
                duration: 200
            }).start()
        }

        animateOut(){
            Animated.timing(this.state.animatePress, {
                toValue: 1,
                duration: 200
            }).start()
        }

      render(){
        // const {navigate} = this.props.navigation;
          const {itemWidth} = this.props;
          return(
            <View>
            

            <TouchableWithoutFeedback
            onPressIn={() => this.animateIn()}
            onPressOut={() => this.animateOut()}
            >             
                <Animated.View style={{
                    margin:5,
                    transform: [
                        {
                            scale: this.state.animatePress
                        }
                    ]
                }}>
                <Image 
                style={{resizeMode: 'cover', width:itemWidth,height:100}} 
                source={this.props.image}
                // onPress={() => navigate('Update', {})}
                >
                </Image>
                <Text>Laptop</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
            </View>
          )
      }

}