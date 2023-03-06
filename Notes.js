import React,  {useState, useEffect } from 'react';
import { StyleSheet,View, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Notes({ navigation }) {

    const [notecontent, setnotecontent] = useState("") 
    var note = ""
    const _storeData = async (notecontent) => {
      try {
        await AsyncStorage.setItem('save_notes', notecontent);
      } catch (error) {
        alert('not saved' + error)
        // Error saving data
      }
    };
   const  _retrieveData = async () => {
      try {
         note = await AsyncStorage.getItem('save_notes');
        if (note !== null) {
          setnotecontent(note)
        }
      } catch (error) {
        alert('not retrieved' + error)
      }
    };
    
    useEffect(() => {
      _retrieveData()
    },[]);

    function saveNote(notecontent){

      alert("Note Saved");
      _storeData(notecontent)
      navigation.navigate('Login1')       

    } 
    return (
        <View style={styles.container}>
          
          <TextInput style={styles.input} onChangeText={notecontent => setnotecontent(notecontent)} multiline={true} scrollEnabled={true} value={notecontent}/>
          <StatusBar style="auto" />
             <FAB style={styles.fab} small icon='check' onPress={() => saveNote(notecontent)}/>
        </View>
      ); 
}



const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
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
    padding: 10,
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
  fab:{
       
    backgroundColor:"#F39C12",
    position:'absolute',
    margin: 20,
    right:0,
    bottom: 10
  },
 
});


export default Notes;