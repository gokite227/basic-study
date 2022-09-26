import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';



export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error ,seterror] = useState("");
  
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <StatusBar style="auto" />
      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        returnKeyType="next"
        onEndEditing={() => console.log("onEndEditing")}
        onSubmitEditing={() => console.log("onSubmitEditing")}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        returnKeyType="next"
        onEndEditing={() => console.log("onEndEditing")}
        onSubmitEditing={() => console.log("onSubmitEditing")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
