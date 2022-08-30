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

import {css_Cadastro} from '../styles/CadastroStyle.js';


function Screen_Cadastro({navigation}){

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
    <StatusBar barStyle={'light-content'}></StatusBar>
    <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'}
      style={{flex:1, backgroundColor:'white'}}
      showsVerticalScrollIndicator={false}>
    <View style={css_Cadastro.body}>      
        
        <TouchableOpacity onPress={closeButton} style={css_Cadastro.closeBtn}>
          <Image source={require("../../assets/close.png")}/>
        </TouchableOpacity>        
        
        <View style={css_Cadastro.textoPrincipalView}>
          <Text style={css_Cadastro.textoPrincipalText}>Cadastre-se</Text>
        </View>
        
        <TouchableOpacity onPress={entrarButton}>
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
                onChangeText={setPrimeiroNome}
              />
            </View>

            <View style={css_Cadastro.boxColumn}>
            <TextInput
            style={css_Cadastro.textColumn}
            placeholder="Sobrenome"
            placeholderTextColor="#BDBDBD"
            autoCapitalize = "none"
            onChangeText={setSobrenome}
            />          
          </View>

          <View style={css_Cadastro.boxColumn}>
            <MaskInput
                style={css_Cadastro.textColumn}
                value={datanasc}
                placeholder="Data de Nascimento"
                placeholderTextColor="#BDBDBD"
                autoCapitalize = "none"
                onChangeText={setDatanasc}
                mask={Masks.DATE_DDMMYYYY}
              />
          </View>

          <View style={css_Cadastro.boxColumn}>
            <MaskInput
                style={css_Cadastro.textColumn}
                value={telefone}
                placeholder="Telefone "
                placeholderTextColor="#BDBDBD"
                autoCapitalize = "none"
                onChangeText={setTelefone}
                mask={Masks.BRL_PHONE}
              />
          </View>          

          <View style={css_Cadastro.boxColumn}>
            <MaskInput
                style={css_Cadastro.textColumn}
                value={cpf}
                placeholder="CPF"
                placeholderTextColor="#BDBDBD"
                autoCapitalize = "none"
                onChangeText={setCPF}
                mask={Masks.BRL_CPF}
              />
          </View>

          <View style={css_Cadastro.boxColumn}>          
              <Picker
                selectedValue={genero}
                onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
              >
                <Picker.Item color="#BDBDBD" fontFamily="Inter-Regular" label="Gênero" value="" />
                <Picker.Item label="Masculino" value="1" />
                <Picker.Item label="Feminino" value="2" />
                <Picker.Item label="Não Binário" value="3" />
                <Picker.Item label="Prefiro não informar" value="4" />  
              </Picker>            
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
            placeholder="Senha"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={isSecureEntry}
            onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity
              style={css_Cadastro.mostrarSenhaView}
              onPress={(event) => {
                setIsSecureEntry((prev) => !prev);
              }}
            >
              <Text style={css_Cadastro.mostrarSenhaText}>{isSecureEntry ? 'Mostrar' : 'Esconder'}</Text>
            </TouchableOpacity>
          </View>

            <TouchableOpacity style={css_Cadastro.cadastroBtn} onPress={cadastrarBtn}>
              <Text style={css_Cadastro.cadastroText}>Cadastrar</Text>
            </TouchableOpacity>


        </View>
      </View>
    </KeyboardAwareScrollView>    
  </>
  )
}


module.exports = Screen_Cadastro;