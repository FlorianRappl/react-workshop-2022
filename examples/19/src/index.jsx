import * as React from 'react';
import { View, Text, Image } from 'react-native';

export default class Splash extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'#fff73f' }}>
        <Image source="../images/logo.png" 
               style={{ width: 250, height: 250, marginBottom: 400 }}
               resizeMode="contain" />
      </View>
    );
  }
}
