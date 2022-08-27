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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const closeButton = () => {
    navigation.navigate('Screen_Inicial')
  }
  
  return(
  <>
    <StatusBar barStyle={'light-content'}></StatusBar>
    <View style={css_Cadastro.body}>      
        
        <TouchableOpacity onPress={closeButton} style={css_Cadastro.closeBtn}>
          <Image source={require("../../assets/close.png")}/>
        </TouchableOpacity>        
        
        <View style={css_Cadastro.textoPrincipalView}>
          <Text style={css_Cadastro.textoPrincipalText}>Cadastre-se</Text>
        </View>
        
        <TouchableOpacity>
          <View style={css_Cadastro.entrarView}>
            <Text style={css_Cadastro.entrarBtn}>Entrar</Text>
          </View>
        </TouchableOpacity>

        <View style={css_Cadastro.container}>
          <View style={css_Cadastro.boxColumn}>
            <TextInput
            style={css_Cadastro.textColumn}
            placeholder="Primeiro Nome"
            placeholderTextColor="#BDBDBD"
            autoCapitalize = "none"
            />
          </View>

          <View style={css_Cadastro.boxColumn}>
            <TextInput
            style={css_Cadastro.textColumn}
            placeholder="Sobrenome"
            placeholderTextColor="#BDBDBD"
            autoCapitalize = "none"
            />
          </View>

          <View style={css_Cadastro.boxColumn}>
            <TextInput
            style={css_Cadastro.textColumn}
            placeholder="Data de Nascimento"
            placeholderTextColor="#BDBDBD"
            autoCapitalize = "none"
            />
          </View>

          <View style={css_Cadastro.boxColumn}>
            <TextInput
            style={css_Cadastro.textColumn}
            placeholder="Telefone"
            placeholderTextColor="#BDBDBD"
            autoCapitalize = "none"
            />
          </View>

          <View style={css_Cadastro.boxColumn}>
            <TextInput
            style={css_Cadastro.textColumn}
            placeholder="E-mail"
            placeholderTextColor="#BDBDBD"
            autoCapitalize = "none"
            />
          </View>

          <View style={css_Cadastro.boxColumn}>
            <TextInput
            style={css_Cadastro.textColumn}
            placeholder="CPF"
            placeholderTextColor="#BDBDBD"
            autoCapitalize = "none"
            />
          </View>

          <View style={css_Cadastro.boxColumn}>
            <TextInput
            style={css_Cadastro.textColumn}
            placeholder="Gênero"
            placeholderTextColor="#BDBDBD"
            autoCapitalize = "none"
            />
          </View>

          
    
          <View style={css_Cadastro.boxColumn}>
            <TextInput
              style={css_Cadastro.textColumn}
              placeholder="Senha"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />    
            <TouchableOpacity style={css_Cadastro.mostrarSenhaView}>
              <Text style={css_Cadastro.mostrarSenhaText}>Mostrar</Text>
            </TouchableOpacity>
          </View>            

            <TouchableOpacity style={css_Cadastro.cadastroBtn}>
              <Text style={css_Cadastro.cadastroText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
      </View>    
  </>
  )
}


module.exports = Screen_Cadastro;