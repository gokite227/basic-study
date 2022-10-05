import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          
          <Text style={styles.Text}>   Login</Text>
        </View>
        <View>
        <Image style={styles.img} source={require("./login.png")} />
          <View style={styles.elem}>
            
          </View>

          <View style={styles.elem}>
            
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(242, 240, 233)',
  },
  header: {
    height:100,
    backgroundColor:'rgb(102, 124, 116)',
  },
  footer: {
    height:60,
    backgroundColor:'red',
  },
  content: {
    height:100,
    width: 50,
    backgroundColor: 'rgb(237, 233, 222)',
  },

  elem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor:'#eee',
    borderBottomWidth:0.5,
    padding: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userComment: {
    padding:8,
    backgroundColor:'yellow',
    borderRadius:5,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'yellow',
  },
  name: {
    paddingLeft: 10,
  },
  Text: {
    fontSize: 25,
    flexDirection: 'row',
    color: 'white'
  },
  img : {
    width: 410,
    height: 650,
  }
});