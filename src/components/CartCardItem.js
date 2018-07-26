import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
}from 'react-native';
import { Card, CardItem, Right} from 'native-base';

class CartCardItem extends Component{
  render(){
    return(
      <CardItem>
        <View>
          <Image style={{height: 90, width:90}}
            source={{uri: this.props.imageUrl}}
          />
        </View>
      </CardItem>
    )
  }
}

export default CartCardItem;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})