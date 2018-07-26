<View style={{flex:1}}>
  <SafeAreaView style={{flex:1}}>
    <View style={{
      flex:1,
      height:40,
      backgroundColor:'white',
      borderBottomWidth: 1,
      borderBottomColor:'#000',
      flexDirection:'row',
      justifyContent: 'space-between'
    }}>
      <View>
        <Image
          source={{uri: this.props.book.imageUrl}}
        />
      </View>
      <View><Text>Right Side</Text></View>
    </View>
  </SafeAreaView>
  <ScrollView style={{flex:1}}>
    <View style={{flex:1, justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      <View><Text>Scroll1</Text></View>
      <View><Text>Scroll2</Text></View>
    </View>
  </ScrollView>
</View>