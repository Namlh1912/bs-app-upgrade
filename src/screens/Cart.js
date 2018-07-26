import React,{Component} from 'react'
import { View, Text, StyleSheet, Image }from 'react-native';
import { Container, Content, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import CartCardItem from '../components/CartCardItem';

import swiper_2 from '../../assets/swiper_2.jpg';
import swiper_3 from '../../assets/swiper_3.jpg';


class Cart extends Component{
  render(){
    return(
      <Container>
        <Content>
          <Swiper style={{height: 100}}>
            <View style={{flex:1}}>
              <Image
                style={{flex:1, height: null, width: null, resizeMode:'contain'}}
                source={swiper_2}/>
            </View>
            <View style={{flex:1}}>
              <Image
                style={{flex:1, height: null, width: null, resizeMode:'contain'}}
                source={swiper_3}/>
            </View>
            <View style={{flex:1}}>
              <Image
                style={{flex:1, height: null, width: null, resizeMode:'contain'}}
                source={swiper_2}/>
            </View>
          </Swiper>
          <Card>
            <CardItem>
              <Text>Your cart</Text>
            </CardItem>


          </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Cart;