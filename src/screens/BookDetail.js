import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {Container,Grid,Col, Button, Icon, Toast} from 'native-base';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bookActions, cartActions } from '../redux/actions';

const mapStateToProps = state => {
  console.log(state.book.isLoading);
  return{
    book: state.book.current,
  }
}

const mapDispatchToProp = dispatch => ({
  addItemToCart: (book) => {
    dispatch(cartActions.AddItemCart(book));
  },
  updateItemQuantity: (book, quantity) => {
    dispatch(cartActions.UpdateItemQuantity(book, quantity));
  },
  getBookDetail:(id) =>{
    dispatch(bookActions.detail(id));
  }
})

class BookDetail extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Detail',
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
      activeSlide: 0,
      quantity: 1,
      bookExist: false,
      isAdding: false,
    }
  }

  componentDidMount() {
    const bookId = this.props.navigation.getParam('id', 'NO-ID');
    this.props.getBookDetail(bookId);
  }

  render() {
    console.log(this.props.book);
    return (
      <Container>
        {this.props.book
          ? this.renderDetailScreen()
          : <ActivityIndicator size="large" color={"#ca212c"}/>
        }
      </Container>
    )
  }

  renderDetailScreen = () => (
      <ScrollView style={{flex:1}}>
        <View style={styles.container}>
          <View style = {styles.overlay}>
            <Image style = {styles.logo} source = {{uri:this.props.book.imageUrl}} />
          </View>
        </View>
        {this.renderContent()}
      </ScrollView>
  )

  //Render Book Detail
  renderContent = () => (
    <View style={styles.content}>
      <Grid>
        <Col size={3}>
          <Text style={{fontSize: 18}}>{this.props.book.title}</Text>
        </Col>
        <Col>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{this.props.book.price}$</Text>
        </Col>
      </Grid>
      <Grid>
        <Col>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{fontSize: 18}}>Quantity:</Text>
          </View>
        </Col>
        <Col size={3}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Button
              style={{width: 50, justifyContent: 'center'}}
              icon light
              onPress={() => this.setState({quantity: this.state.quantity > 1 ? this.state.quantity - 1 : 1})}
            >
              <Icon name='ios-remove-outline'/>
            </Button>
            <View style={styles.buttonQuantity}>
              <Text style={{fontSize: 18}}>{this.state.quantity}</Text>
            </View>
            <Button
              style={{width: 50, justifyContent: 'center'}}
              icon light
              onPress={() => this.setState({quantity: this.state.quantity + 1})}
            >
              <Icon name='ios-add'/>
            </Button>
          </View>
        </Col>
      </Grid>
      <Grid style={{marginTop: 15}}>
        <Col size={3}>
          <Button
            block
            onPress={this.addToCart()}
          >
            <Text style={{color: "#fdfdfd", marginLeft: 5}}>
              Add to cart
            </Text>
          </Button>
        </Col>
      </Grid>
      <Grid style={{marginTop: 15}}>
        <Col size={3}>
          <View style={styles.description}>
            <Text style={{marginBottom: 5}}>Description</Text>
            <View style={styles.divider}/>
            <Text>
              this is a description
            </Text>
          </View>
        </Col>
      </Grid>
    </View>
  )


  addToCart = () => {
    if(this.state.bookExist === false){
      var book = Object.assign(this.props.book, {quantity: this.state.quantity});
      this.props.addItemToCart(book);
      this.setState({bookExist: true, isAdding:true});
    }else{
      this.props.updateItemQuantity(this.props.book, this.state.quantity);
    }
  }

}

var styles = StyleSheet.create({
  wrapContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

  },
  container: {
    flex: 1,
    alignItems: 'center',
    height:350,
  },
  overlay: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 170,
    height: 235,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd'
  },
  backdrop: {
    flex:1,
    flexDirection: 'row',
  },
  headline: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  },
  content:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fdfdfd',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: 'center'
  },
  buttonQuantity:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30
  },
  description: {
    marginTop: 15,
    padding: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'rgba(149, 165, 166, 0.3)'
  },
  divider:{
    width: 50,
    height: 1,
    backgroundColor: 'rgba(44, 62, 80, 0.5)',
    marginLeft: 7,
    marginBottom: 10
  }
});

export default connect(mapStateToProps,mapDispatchToProp)(BookDetail);