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
  KeyboardAvoidingView,
} from "react-native";
import { Picker } from '@react-native-picker/picker'
import MaskInput,{ Masks } from 'react-native-mask-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { StatusBar, TurboModuleRegistry } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState } from "react";
  
  import {css_Home} from '../styles/HomeStyle.js';



  function Screen_Home({navigation}){

    const [primeiroNome, setPrimeiroNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState('');
  const [datanasc, setDatanasc] = useState('');
  const [cpf, setCPF] = useState('');
  const [isSecureEntry,setIsSecureEntry] = useState(true);

  const entrarButton = () => {
    navigation.navigate('Screen_Entrar')
  }    
  const closeButton = () => {
    navigation.navigate('Screen_Inicial')
  }  

  const cadastrarBtn = () => {
    navigation.navigate('Screen_Fotos')
  }

  const [genero, setGenero] = useState("");
  
    return(
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}></StatusBar>
      <View style={css_Home.body}> 

      <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'}        
        contentContainerStyle={{flexGrow: 1}}
        style={{backgroundColor:'red'}}
        showsVerticalScrollIndicator={true}>    
        
          <View style={css_Home.textoPrincipalView}>
            <Text style={css_Home.textoPrincipalText}>Vagas</Text>
          </View>      

          <View style={css_Home.boxColumn}>
              <TextInput
              style={css_Home.textColumn}
              placeholder="Buscar Vaga"
              placeholderTextColor="#BDBDBD"
              />
              <TouchableOpacity
                style={css_Home.mostrarSenhaView}
                onPress={(event) => {((prev) => !prev);}}
              >
                <Text style={css_Home.mostrarSenhaText}>Filtrar</Text>
              </TouchableOpacity>
          </View>   
            
            <TouchableOpacity style={css_Home.cadastroBtn} onPress={cadastrarBtn}>
              <Text style={css_Home.cadastroText}>arrumar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css_Home.cadastroBtn} onPress={cadastrarBtn}>
              <Text style={css_Home.cadastroText}>arrumar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css_Home.cadastroBtn} onPress={cadastrarBtn}>
              <Text style={css_Home.cadastroText}>arrumar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css_Home.cadastroBtn} onPress={cadastrarBtn}>
              <Text style={css_Home.cadastroText}>arrumar</Text>
            </TouchableOpacity>

            <View style={{paddingBottom:50}}></View>
        </KeyboardAwareScrollView>

        <View style={{alignItems:'center',}}>
          <View style={css_Home.footerBaseContorno}></View> 

          <View style={css_Home.footerBase}></View>
          
          <View style={css_Home.footermeialuass}></View> 

          <View style={css_Home.footerMeiaLua}></View> 

        </View>


      </View>
      
      
        
  </>
    )
  }
  

  module.exports = Screen_Home;