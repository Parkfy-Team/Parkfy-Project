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
  import { StatusBar, TurboModuleRegistry } from 'react-native';
  import { useFonts } from 'expo-font';
  import React, { useState } from "react";
  
  import {css_Perfil} from '../styles/PerfilStyle.js';



  function Screen_Perfil({navigation}){

    const entrarButton = () => {
      navigation.navigate('Screen_Entrar')
    }
    const cadastrarButton = () => {
      navigation.navigate('Screen_Cadastrar')
    }
  
    return(
    <>
      <StatusBar barStyle={'light-content'}></StatusBar>        
    </>
    )
  }
  

  module.exports = Screen_Perfil;