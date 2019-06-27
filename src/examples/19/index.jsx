import * as React from 'react';
import { View, Image } from 'react-native';

export default () => (
  <View style={{ flex: 1, backgroundColor: '#fff73f' }}>
    <Image source="../images/logo.png" 
           style={{ width: 250, height: 250, marginBottom: 400 }}
           resizeMode="contain" />
  </View>
);
