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

import {css_Inicial} from '../styles/InicialStyle.js';


function Screen_Inicial({navigation}){

    const entrarButton = () => {
      navigation.navigate('Screen_Entrar')
    }
    const cadastrarButton = () => {
      navigation.navigate('Screen_Cadastro')
    }
  
    return(
      <>
      <StatusBar barStyle={'light-content'}></StatusBar>
        <View style={css_Inicial.body}>
  
        <Image style={css_Inicial.image} source={require("../../assets/logo.png")} />
  
        <Text style={css_Inicial.nomeText}>Park<Text style={{color: 'white'}}>Fy</Text> </Text>
  
        <Text style={css_Inicial.sloganText}>A gente procura, você estaciona</Text>
  
        <TouchableOpacity onPress={entrarButton} style={css_Inicial.entrarBtn}>
          <Text style={css_Inicial.entrarText}>Entrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={cadastrarButton} style={css_Inicial.cadastrarBtn}>
          <Text style={css_Inicial.cadastrarText}>Cadastre-se</Text>
        </TouchableOpacity>
  
        <View style={css_Inicial.viewVisitante}>
        <TouchableOpacity>
          <Text style={css_Inicial.visitanteText}>Acessar como visitante</Text>
        </TouchableOpacity>
        </View>
  
    </View>
    </>
    )
  }
  

  module.exports = Screen_Inicial;