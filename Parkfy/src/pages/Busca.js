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
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from "react";
  
  import {css_Busca} from '../styles/BuscaStyle.js';



  function Screen_Busca({navigation}){

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
      
      <View style={css_Busca.body}> 

      <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'}        
        contentContainerStyle={{flexGrow: 1}}
        style={{backgroundColor:'white'}}
        showsVerticalScrollIndicator={true}> 

          

          <View style={css_Busca.textoPrincipalView}>
            <Text style={css_Busca.textoPrincipalText}>Busca</Text>
          </View>

          <TouchableOpacity onPress={closeButton} style={css_Busca.closeBtn}>
              <Text style={css_Busca.voltarText}>Voltar</Text>
          </TouchableOpacity>

          <View style={css_Busca.boxColumn}>
              <TextInput
              style={css_Busca.textColumn}
              placeholder="Localização"
              placeholderTextColor="#BDBDBD"
              />
              <TouchableOpacity
                style={css_Busca.mostrarSenhaView}
                onPress={(event) => {((prev) => !prev);}}
              >
              </TouchableOpacity>
          </View>   
            
            <View style={css_Busca.searchView}>
              <Text style={css_Busca.searchText}>Tipo da Vaga</Text>
            </View>
            <TouchableOpacity style={css_Busca.cadastroBtn} onPress={cadastrarBtn}>
              <Text style={css_Busca.cadastroText}>arrumar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css_Busca.cadastroBtn} onPress={cadastrarBtn}>
              <Text style={css_Busca.cadastroText}>arrumar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css_Busca.cadastroBtn} onPress={cadastrarBtn}>
              <Text style={css_Busca.cadastroText}>arrumar</Text>
            </TouchableOpacity>

            <View style={{paddingBottom:50}}></View>
        </KeyboardAwareScrollView>

        <View style={{alignItems:'center',}}>
          <View style={css_Busca.footerBaseContorno}></View> 

          <View style={css_Busca.footerBase}></View>
          
          <View style={css_Busca.footermeialuass}></View> 

            <View style={css_Busca.footerMeiaLua}></View>
            
          <TouchableOpacity style={css_Busca.searchBtn}>
            <FontAwesome name="search" size={43} color="black"/>  
          </TouchableOpacity>

        </View>


      </View>
      
      
        
  </>
    )
  }
  

  module.exports = Screen_Busca;