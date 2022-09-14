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
  
  import {css_Fotos} from '../styles/FotosStyle.js';

  function Screen_Fotos({navigation}){

    const entrarButton = () => {
      navigation.navigate('Screen_Entrar')
    }
    const enviarButton = () => {
      navigation.navigate('Screen_CadastroConcluido')
    }
    const fotoDocBtn = () => {
      navigation.navigate('Screen_Camera')
    }
    const selfieBtn = () => {
      navigation.navigate('Screen_Camera')
    }
  
    return(
    <>
      <View style={css_Fotos.body}></View>
      
      <Text style={css_Fotos.quaseLaText}>Quase lá...</Text>
        
      <Text style={css_Fotos.fotoText}>Antes de seguir, por questões de segurança{"\n"}precisamos que você siga os passos a seguir:</Text>
      
      <Text style={css_Fotos.fotoDocRequestText}>1. Tire a foto de um documento de identificação{"\n"}válido (RG ou CNH)</Text>
        
      <TouchableOpacity onPress={fotoDocBtn} style={css_Fotos.fotoDocBtn}>
        <Text style={css_Fotos.fotoDocText}>Tirar Foto</Text>
      </TouchableOpacity>

      <Text style={css_Fotos.selfieRequestText}>2. Tire uma Selfie segurando o documento{"\n"}enquadrando o seu rosto (evite usar óculos,{"\n"}boné e outros objetos que dificultem a sua{"\n"}identificação)</Text>

      <TouchableOpacity onPress={selfieBtn} style={css_Fotos.selfieBtn}>
        <Text style={css_Fotos.selfieText}>Tirar Foto</Text>
      </TouchableOpacity>
        
      <TouchableOpacity onPress={enviarButton} style={css_Fotos.enviarBtn}>
        <Text style={css_Fotos.enviarText}>Enviar</Text>
      </TouchableOpacity>
    </>
    )
  }
  

  module.exports = Screen_Fotos;