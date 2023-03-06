import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login1 from './Login1'
import Login2 from './Login2'
import Notes from './Notes'


const Stack = createStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login1" component={Login1} 
        options={{
          headerStyle: {
            backgroundColor:'#1e90ff',
          },          
        }}/>
        <Stack.Screen name="Login2" component={Login2} 
        options={{
          headerStyle: {
            backgroundColor:'#1e90ff',
          },
        }}/>
        <Stack.Screen name="Notes" component={Notes} 
        options={{
          headerStyle: {
            backgroundColor:'#1e90ff',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}

