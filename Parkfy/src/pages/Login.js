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
  
  
  function Screen_Entrar({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const closeButton = () => {
      navigation.navigate('Screen_Inicial')
    }
   
    return (
      <View style={css_Entrar.entrarBody}>
        
        <TouchableOpacity onPress={closeButton} style={css_Entrar.closeBtn}>
          <Image source={require("../../assets/close.png")}/>
        </TouchableOpacity>
        
        <View style={css_Entrar.emailView}>
          <TextInput
           style={css_Entrar.emailText}
           placeholder="Email"
           placeholderTextColor="#BDBDBD"
           autoCapitalize = "none"
          />
        </View>
  
        <View style={css_Entrar.entrarLoginView}>
          <Text style={css_Entrar.entrarLoginText}>Entrar</Text>
        </View>
        
        <TouchableOpacity>
          <View style={css_Entrar.cadastroView}>
            <Text style={css_Entrar.cadastroBtn}>Cadastre-se</Text>
          </View>
        </TouchableOpacity>
  
        <View style={css_Entrar.senhaView}>
          <TextInput
            style={css_Entrar.senhaText}
            placeholder="Senha"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
   
        <TouchableOpacity style={css_Entrar.forgotView}>
          <Text style={css_Entrar.forgotText}>Esqueci minha senha</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={css_Entrar.loginBtn}>
          <Text style={css_Entrar.loginText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const css_Entrar = StyleSheet.create({
    entrarLoginText: {
      position: 'absolute',
      fontSize: 30,
      fontWeight: "600",
      fontStyle: "normal",
      lineHeight: 30,
      textAlign: "center",
      color: "#000000",
    },
    
    entrarLoginView: {
      alignItems: "center",
      top: 20,
    },
    
    emailView: {
      top: PixelRatio.roundToNearestPixel(130),
      left: PixelRatio.roundToNearestPixel(18),
    },
    
    emailText: {
      fontSize: 16,
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: 16,
    },
    
    senhaView: {
      top: PixelRatio.roundToNearestPixel(148),
      left: PixelRatio.roundToNearestPixel(18),
    },
    
    senhaText: {
      fontSize: 16,
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: 16,
    },
    
    forgotView: {
      alignItems: "center",
      top: PixelRatio.roundToNearestPixel(173)
    },
    
    forgotText: {
      position: "absolute",
      color: "#2DCDB0",
    },
    
    loginBtn: {
      display: 'flex',
      flexDirection:"column",
      alignItems: 'center',
      padding:(16,16),
      position: "absolute",
      height: PixelRatio.roundToNearestPixel(56),
      top: PixelRatio.roundToNearestPixel(300),
      width: PixelRatio.roundToNearestPixel(343),
      backgroundColor: '#2DCDB0',
      borderRadius: PixelRatio.roundToNearestPixel(100),
      marginLeft: PixelRatio.roundToNearestPixel(25)
    },
    
    loginText: {
      width: PixelRatio.roundToNearestPixel(80),
      height: PixelRatio.roundToNearestPixel(24),
      color:'white',
      fontWeight: '600',
      fontSize: PixelRatio.roundToNearestPixel(20),
      lineHeight: PixelRatio.roundToNearestPixel(24),
      textAlign: 'center',
    },
    
    cadastroView: {
      position: "absolute",
      top: 25,
      left: PixelRatio.roundToNearestPixel(300),
      width: PixelRatio.roundToNearestPixel(80),
      height: PixelRatio.roundToNearestPixel(20),
      color: "#2DCDB0"
    },
    
    cadastroBtn: {
      color: "#2DCDB0"
    },
    
    closeBtn: {
      width: PixelRatio.roundToNearestPixel(16),
      height: PixelRatio.roundToNearestPixel(16),
      marginLeft: PixelRatio.roundToNearestPixel(20),
      top: PixelRatio.roundToNearestPixel(65),
    }
    
  });

  module.exports = Screen_Entrar;