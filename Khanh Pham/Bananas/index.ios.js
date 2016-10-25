import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  ListView
} from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return(
     <View style={{alignItems: 'center'}}>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
     </View>
    );     
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
      
    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000); 
  }

  render () {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render () {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

class LotsOfStyles extends Component {
  render () {
    return (
      <View>
        <Text style={styles.red}> just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

class FlexDimensionBasics extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>  
      );
  }
};

class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red', flexDirection: 'column'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}  />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}  />
      </View>
      );
  }
}

class JustifyContentBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}  />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}  />
      </View>
    );
  }
}

class AlignItemBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}  />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}  />
      </View>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ' '};
  }

  render () {
    return (
      <View style={{padding: 10}}>
        <TextInput 
          style={{height: 40}}
          placeholder="Type here to trnaslate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View> 
    );
  }
}

// class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//     return (
//       <ScrollView>
//         <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>What's the best</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Image source={require('./img/favicon.png')} />
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }

class ListViewBasics extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasCHanged: (r1, r2) => r1 !==r2});
    this.state = {
      dataaSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red'
  },
});
AppRegistry.registerComponent('Bananas', () => ListViewBasics);
