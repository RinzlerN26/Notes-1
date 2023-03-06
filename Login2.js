import React,  { useState }  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
const userinfo={username:"b", password:"12345"};
function Login2({ navigation }) {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  
    function validate(){
       if(userinfo.username===username && userinfo.password===password )
        {
           alert("Login 2 Success");
           setUsername("")
           setPassword("")
           navigation.navigate('Notes')
        }
      else
       {
          alert("invalid");
       }
     }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login:2</Text>
        <TextInput style={styles.input} placeholder="Username" onChangeText={username => setUsername(username)} value={username}/>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={password => setPassword(password)} value={password} />
        <StatusBar style="auto" />
           <View style={styles.buttoncontainer}> 
              <TouchableOpacity style={styles.userbutton} onPress={validate}> 
              <Text style={styles.buttontext}>Sign In</Text>
              </TouchableOpacity>    
           </View>
      </View>
    );
  
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e90ff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    welcome: {
     
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: "#fff"
    },
    input: {
      
      width: "90%",
      backgroundColor: "#fff",
      padding: 15,
      marginBottom: 10
  
    },
    userbutton: {
       
      backgroundColor: "#F39C12",
      padding: 15,
      width: "45%",
      margin:10
  
  
    },
    buttoncontainer: {
      flexDirection: "row",
      justifyContent: "center",
      width: "90%",
      alignItems:"center"
  
    },
    buttontext: {
      fontSize: 18,
      textAlign: "center"
    }, 
    
  });
  

  export default Login2;