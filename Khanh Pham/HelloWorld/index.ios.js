import React, { Component } from 'react';
import { AppRegistry, Text, Image } from 'react-native';

class HelloWorldApp extends Component {
  render() {
  	let pic = {
 		uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}; 
    return (
      <view>            
        //<Text>Hello World!</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </view>
    );
  }
}
    
      


AppRegistry.registerComponent('HelloWorld', () => HelloWorldApp);
