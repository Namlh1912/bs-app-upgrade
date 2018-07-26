import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import {
  Card,
  CardItem,
  Button,
  Body
} from 'native-base';


export default class GridView extends Component {
  render() {
    return (
      <Card transparent style={{width: 160}}>
        <CardItem cardBody>
          <Button
            onPress={()=>
              this.props.navigation.navigate('Detail', {
                id: this.props.id,
                title: this.props.title,
              })
            }
            transparent
            style={style.button}
          >
            <Image source={{uri: this.props.imageUrl}} style={style.image}/>
            <View style={style.border}/>
          </Button>
        </CardItem>
        <CardItem style={{paddingTop: 0}}>
          <Button style={{flex: 1, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, paddingTop: 0}}
                  transparent
          >
            <Body>
              <Text
                style={{fontSize: 16}}
                numberOfLines={1}
              >{this.props.title}</Text>
              <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
                <View style={style.line}/>
                  <Text style={style.price}>
                    {this.props.price}$
                  </Text>
                <View style={style.line}/>
              </View>
            </Body>
          </Button>
        </CardItem>
      </Card>
    )
  }
}

const style = {
  button: {flex: 1, height: 250, paddingLeft: 4, paddingRight: 4},
  image: {
    height: 250,
    width: 170,
    flex: 1,
    resizeMode: 'contain'
  },
  border: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(253, 253, 253, 0.2)'
  },
  price: {
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
    zIndex: 1000,
    backgroundColor: '#fdfdfd'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#7f8c8d',
    position: 'absolute',
    top: '52%'
  }
}