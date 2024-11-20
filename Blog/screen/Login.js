import React  from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
  } from 'react-native';
  
  const Login = () => {
    return (
      <SafeAreaView>
          <TextInput
          style = {{height: 40,  margin: 10, borderWidth: 1}}
        placeholder="username"
      />
          <TextInput
          style = {{height: 40,  margin: 10, borderWidth: 1}}
        placeholder="password"
      />
      <TouchableOpacity
      style = {{
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      }}>
          <Text>Login</Text>
      </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  
  export default Login;