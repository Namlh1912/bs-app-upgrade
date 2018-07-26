/**
 * List Book
 */

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {bookActions} from '../redux/actions';

import logo from '../../assets/logo.png';
import GridView from '../components/Grid';

const mapStateToProps = state =>{{
  console.log(state);
  return{
    loading: state.book.isLoading,
    books: state.book.list,
  }
}};

const mapDispatchToProps = dispatch =>({
  getListBook: () => {
    dispatch(bookActions.list());
  }
});

class LogoTitle extends React.Component {
  render() {
    return (
      <Text
        style={{
          color:'#ca212c',
          fontWeight:'bold',
          fontSize: 20,
          fontFamily:'Iowan Old Style'
        }}>
          Book
      </Text>
    );
  }
}

class Home extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: <LogoTitle/>,
    headerLeft: (
      <TouchableOpacity
        style={{alignItems: 'center',
          padding: 10}}
        onPress={() => navigation.navigate('Login')}
      >
        <Ionicons name='ios-contact' size={25} color='#ca212c' />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        style={{alignItems: 'center',
          padding: 10}}
        onPress={() => navigation.navigate('Cart')}
      >
        <Ionicons name='md-cart' size={25} color='#ca212c' />
      </TouchableOpacity>
    )
  });

  constructor(props){
    super(props);
    this.state = {
      refreshing: false,
    }
  }

  componentDidMount(){
    this.props.getListBook();
  }

  render() {
    return (
      <ScrollView
        scrollEventThrottle={16}

      >
        <View style={{marginTop:40}}>
          <Text style={{fontSize:24, fontWeight:'700'}}>
            List
          </Text>
          <View style={styles.gridWrapper}>
            {this.props.books.map((item,i) => (
              <GridView
                key={i}
                id={item.id}
                title={item.title}
                type={item.type}
                price={item.price}
                imageUrl={item.imageUrl}
                navigation={this.props.navigation}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  gridWrapper:{
    paddingHorizontal:20,
    marginTop:20,
    flex: 1,
    flexDirection:'row',
    flexWrap: 'wrap'
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);