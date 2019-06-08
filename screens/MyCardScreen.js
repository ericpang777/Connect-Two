import React from 'react';
import {View, 
        Text,
        StyleSheet,
      } 
from 'react-native'; 

export default class MyCardScreen extends React.Component {
  static navigationOptions = {
    title: 'My Card',
  };

  render() {
    return(
      <View style = {styles.container}>
      <Text>Business Card Placeholder</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    alignItems: 'center',
  }
})
