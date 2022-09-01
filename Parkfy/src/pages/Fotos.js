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
  
    return(
    <>
      <View style={css_Fotos.body}></View>
      
      <Text style={css_Fotos.quaseLaText}>Quase lá...</Text>
        
      <Text style={css_Fotos.fotoText}>Antes de seguir, por questões de{"\n"}segurança precisamos que você{"\n"}siga os passos a seguir:</Text>
      
      <Text style={css_Fotos.fotoDocRequestText}>1. Tire a foto de um documento de identificação válido (RG ou CNH)</Text>
        
      <TouchableOpacity style={css_Fotos.fotoDocBtn}>
        <Text style={css_Fotos.fotoDocText}>Tirar Foto</Text>
      </TouchableOpacity>

      <Text style={css_Fotos.selfieRequestText}>2. Tire uma Selfie segurando{"\n"}o documento enquadrando o{"\n"}seu rosto (evite usar óculos, boné{"\n"}e outros objetos que dificultem a{"\n"}sua identificação)</Text>

      <TouchableOpacity style={css_Fotos.selfieBtn}>
        <Text style={css_Fotos.selfieText}>Tirar Foto</Text>
      </TouchableOpacity>
        
      <TouchableOpacity onPress={enviarButton} style={css_Fotos.enviarBtn}>
        <Text style={css_Fotos.enviarText}>Enviar</Text>
      </TouchableOpacity>
    </>
    )
  }
  

  module.exports = Screen_Fotos;