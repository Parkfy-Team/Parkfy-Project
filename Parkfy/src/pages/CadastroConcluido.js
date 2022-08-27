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
  
  import {css_CadastroConcluido} from '../styles/CadastroConcluidoStyle.js';

  function Screen_CadastroConcluido({navigation}){

    const entrarButton = () => {
      navigation.navigate('Screen_Entrar')
    }
    const cadastrarButton = () => {
      navigation.navigate('Screen_Cadastrar')
    }
  
    return(
    <>
      <StatusBar barStyle={'light-content'}></StatusBar>

      <View style={css_CadastroConcluido.body}></View>
        
      <Image style={css_CadastroConcluido.image} source={require("../../assets/checked.png")} />
        
      <Text style={css_CadastroConcluido.cadastroConcluidoText}>Cadastro Concluído!</Text>

      <Text style={css_CadastroConcluido.cadastroMessageText}>Seu Cadastro foi enviado para{"\n"}validação pela equipe de{"\n"}integridade do ParkFy e em{"\n"}poucos minutos, você deve{"\n"}receber uma página de{"\n"}verificação por e-mail para{"\n"}acessar o aplicativo.</Text>         
    </>
    )
  }
  

  module.exports = Screen_CadastroConcluido;