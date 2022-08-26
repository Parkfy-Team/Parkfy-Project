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
  
  import {css_Cadastro} from '../styles/CadastroStyle.js';

  function Screen_Cadastro({navigation}){

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
  

  module.exports = Screen_Cadastro;