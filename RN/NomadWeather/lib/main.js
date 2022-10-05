import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';




export default function App() {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error ,seterror] = useState("");
  
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.container}>
        
        </View>
        <View><Image style={styles.img2} source={require("./main.png")} /></View>
      
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#d3cbb4',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  container2: {
    backgroundColor: 'rgb(237, 233, 222)',
    width:410,
    height:100,
  },
  container3: {
    backgroundColor: '#d3cbb4',
    width:410,
    height:100,
  },
  img: {
    flex: 0.7,
    width: 350,
    height: 100,
  },
  img2: {
    flex: 0,
    width: 410,
    height: 250,
    
  },
  text : {
    fontSize: 40,
  }
});
