import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
 } from 'react-native';

 // Components
 import NavBar from './components/navBar';

export default class AppContainer extends Component {
  leftPress() {
    console.log('yayah');
  }
  onPress() {
    console.log('CLICK :D');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{width: 100}}>Hello world</Text>
        <NavBar
          title = "Inicio"
          leftText = "1"
          rightText = "2"
          onLeftPress = {this.onleftPress}
          containerStyle={{backgroundColor: '#303030'}}
          colorText='#ff9900' />
        <Button 
          onPress={this.onPress}
          title="Hello" 
          color="#FFFFFF" 
          accessibilityLabel="Tap on Me"/>
         <Button 
          onPress={this.onPress.bind(this)}
          title="Hello" 
          color="#FFFFFF" 
          accessibilityLabel="Tap on Me"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // align horizontal
    justifyContent: 'center', // align vertical
    backgroundColor: "rgba(239,173,44,1)"
  }
})
