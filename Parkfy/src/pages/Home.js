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
  import {css_Cadastro} from '../styles/CadastroStyle.js';



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
    <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'}
      style={{flex:1, backgroundColor:'white'}}
      showsVerticalScrollIndicator={false}>
    <View style={css_Cadastro.body}>    

        <View style={css_Cadastro.textoPrincipalView}>
          <Text style={css_Cadastro.textoPrincipalText}>Vagas</Text>
        </View>      

        <View style={css_Cadastro.boxColumn}>
            <TextInput
            style={css_Cadastro.textColumn}
            placeholder="Buscar Vaga"
            placeholderTextColor="#BDBDBD"
            />
            <TouchableOpacity
              style={css_Cadastro.mostrarSenhaView}
              onPress={(event) => {((prev) => !prev);}}
            >
              <Text style={css_Cadastro.mostrarSenhaText}>Filtrar</Text>
            </TouchableOpacity>
          </View>    
          
            <TouchableOpacity style={css_Cadastro.cadastroBtn} onPress={cadastrarBtn}>
              <Text style={css_Cadastro.cadastroText}>arrumar</Text>
            </TouchableOpacity>


        </View>
    </KeyboardAwareScrollView>    
  </>
    )
  }
  

  module.exports = Screen_Home;