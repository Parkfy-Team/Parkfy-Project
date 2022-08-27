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
  
  import {css_Entrar} from '../styles/LoginStyle.js';



  
  function Screen_Entrar({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const closeButton = () => {
      navigation.navigate('Screen_Inicial')
    }
   
    return (
      <View style={css_Entrar.body}>
        
        <TouchableOpacity onPress={closeButton} style={css_Entrar.closeBtn}>
          <Image source={require("../../assets/close.png")}/>
        </TouchableOpacity>
        
        <View style={css_Entrar.entrarLoginView}>
          <Text style={css_Entrar.entrarLoginText}>Entrar</Text>
        </View>
        
        <TouchableOpacity>
          <View style={css_Entrar.cadastroView}>
            <Text style={css_Entrar.cadastroBtn}>Cadastre-se</Text>
          </View>
        </TouchableOpacity>
        
        <View style={css_Entrar.container}>
          <View style={css_Entrar.boxColumn}>
            <TextInput
            style={css_Entrar.textColumn}
            placeholder="Email"
            placeholderTextColor="#BDBDBD"
            autoCapitalize = "none"
            />
          </View>
  
          <View style={css_Entrar.boxColumn}>
            <TextInput
            style={css_Entrar.textColumn}
            placeholder="Senha"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableOpacity style={css_Entrar.mostrarSenhaView}>
            <Text style={css_Entrar.mostrarSenhaText}>Mostrar</Text>
          </TouchableOpacity>
          </View>
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
  
  module.exports = Screen_Entrar;