import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/HomeScreen.js";
import Cacreme from "./screens/Cacreme.js";
import Lindt from "./screens/Lindt.js";
import Kope from "./screens/Kopenhagen.js";

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: true, 
        }}
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Cacau Show" component={Cacreme}></Stack.Screen>
        <Stack.Screen name="Lindt" component={Lindt}></Stack.Screen>
        <Stack.Screen name="Kopenhagen" component={Kope}></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
    
  );
};


