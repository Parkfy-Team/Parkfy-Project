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

function Screen_Inicial({navigation}){

    const entrarButton = () => {
      navigation.navigate('Screen_Entrar')
    }
    const cadastrarButton = () => {
      navigation.navigate('Screen_Cadastrar')
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
  
  const css_Inicial = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      position:'absolute',
      top: PixelRatio.roundToNearestPixel(60),
      bottom: '50%',
      width:PixelRatio.roundToNearestPixel(229),
      height:PixelRatio.roundToNearestPixel(231),
    },
   
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20, 
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    nomeText: {
      position:'absolute',
      color: '#2DCDB0',
      top: '40%',
      fontWeight: '400',
      fontSize: PixelRatio.roundToNearestPixel(65),
      lineHeight: PixelRatio.roundToNearestPixel(90),
      textAlign: 'center',
      fontFamily:"poppins_regular",
    },
    sloganText: {
      position:'absolute',
      color: 'grey',
      top: '51.5%',
      fontWeight: '400',
      fontSize: PixelRatio.roundToNearestPixel(18),
      lineHeight: PixelRatio.roundToNearestPixel(24),
      textAlign: 'center',
    },
   
    entrarBtn: {
      display: 'flex',
      flexDirection:"column",
      alignItems:"center",
      padding:(16,16),
      position: "absolute",
      height: PixelRatio.roundToNearestPixel(56),
      bottom: PixelRatio.roundToNearestPixel(126),
      width: PixelRatio.roundToNearestPixel(343),
      backgroundColor: '#2DCDB0',
      borderRadius: PixelRatio.roundToNearestPixel(100),    
      
    },
    entrarText:{
      width: PixelRatio.roundToNearestPixel(60),
      height: PixelRatio.roundToNearestPixel(24),
      color:'white',
      fontWeight: '600',
      fontSize: PixelRatio.roundToNearestPixel(20),
      lineHeight: PixelRatio.roundToNearestPixel(24),
      textAlign: 'center',  
    },
  
    cadastrarBtn: {
      display: 'flex',
      flexDirection:"column",
      alignItems:'center',
      padding:(16,16),
      position: "absolute",
      height: PixelRatio.roundToNearestPixel(56),
      bottom: PixelRatio.roundToNearestPixel(208),
      width: PixelRatio.roundToNearestPixel(343),
      backgroundColor: '#2DCDB0',
      borderRadius: PixelRatio.roundToNearestPixel(100),    
    },
  
    cadastrarText:{
      width: PixelRatio.roundToNearestPixel(120),
      height: PixelRatio.roundToNearestPixel(24),
      color:'white',
      fontWeight: '600',
      fontSize: PixelRatio.roundToNearestPixel(20),
      lineHeight: PixelRatio.roundToNearestPixel(24),
      textAlign: 'center',
    },
  
    visitanteText:{
      height: PixelRatio.roundToNearestPixel(19),
      bottom: PixelRatio.roundToNearestPixel(76),
      fontWeight: '600',
      fontSize: PixelRatio.roundToNearestPixel(20),
      lineHeight: PixelRatio.roundToNearestPixel(19),
      color:'#2DCDB0',
      opacity: 0.7,
      alignContent:'center',
    },
  
    viewVisitante:{
      marginTop: 720,
      height: PixelRatio.roundToNearestPixel(19),
      fontWeight: '600',
      fontSize: PixelRatio.roundToNearestPixel(20),
      lineHeight: PixelRatio.roundToNearestPixel(19),
      color:'#2DCDB0',
      opacity: 0.7,
      alignContent:'center',
    },
  });

  module.exports = Screen_Inicial;