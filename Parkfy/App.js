import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState } from "react";
import {ScrollView,
  SafeAreaView,
  FlatList,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();


/* importar telas*/
import Inicial from './src/pages/Inicial';
import Login from './src/pages/Login';


function App() {  

  const [fontsLoaded] = useFonts({
    'poppins_regular': require('./assets/fonts/poppins_regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Screen_Inicial'
          component={Inicial} />
        <Stack.Screen
          name='Screen_Entrar'
          component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}
 
export default App;



{/* <View style={css_Inicial.inputView}>
      <TextInput
        style={css_Inicial.TextInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>

    <View style={css_Inicial.inputView}>
      <TextInput
        style={css_Inicial.TextInput}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>     */}

