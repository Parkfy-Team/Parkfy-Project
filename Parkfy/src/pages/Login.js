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
  import { FontAwesome } from '@expo/vector-icons';
  
  import {css_Entrar} from '../styles/LoginStyle.js';



  
  function Screen_Entrar({navigation}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const cadastreButton = () => {
      navigation.navigate('Screen_Cadastro')
    };
    const closeButton = () => {
      navigation.navigate('Screen_Inicial')
    };
    const entrarButton = () => {
      navigation.navigate('Screen_Home')
    };

    const [isSecureEntry,setIsSecureEntry] = useState(true)
   
    return (
      <View style={css_Entrar.body}>
        
        <TouchableOpacity onPress={closeButton} style={css_Entrar.closeBtn}>
          <FontAwesome name="close" size={23} color="black"/>
        </TouchableOpacity>
        
        <View style={css_Entrar.entrarLoginView}>
          <Text style={css_Entrar.entrarLoginText}>Entrar</Text>
        </View>
        
        <TouchableOpacity onPress={cadastreButton}>
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
            secureTextEntry={isSecureEntry}
            onChangeText={(senha) => setSenha(senha)}
            />
            <TouchableOpacity
              onPress={(event) => {
                setIsSecureEntry((prev) => !prev);
              }}
            >
              <Text style={css_Entrar.mostrarSenhaText}>{isSecureEntry ? 'Mostrar' : 'Esconder'}</Text>
            </TouchableOpacity>
          </View>

          
        </View>
   
        <TouchableOpacity style={css_Entrar.forgotView}>
          <Text style={css_Entrar.forgotText}>Esqueci minha senha</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={css_Entrar.loginBtn} onPress={entrarButton}>
          <Text style={css_Entrar.loginText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  module.exports = Screen_Entrar;