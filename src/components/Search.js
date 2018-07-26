import React, {Component} from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class Search extends Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{height: this.startHeaderHeight, backgroundColor:'white', borderBottomWidth:1, borderBottomColor:'#dddddd'}}>
          <View style={{ flexDirection:'row', padding:10,
            backgroundColor: 'white', marginHorizontal:20,
            shadowOffset:{width:0, height:0},
            shadowColor: 'black',
            shadowOpacity: 0.2,
            elevation: 1
          }}>
            <Icon name="ios-search" size={20}/>
            <TextInput
              placeholder="Try Comics"
              placeholderTextColor="grey"
              style={{ flex:1, fontWeight:'700', backgroundColor:'white'}}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Search