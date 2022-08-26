import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState } from "react";
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


/* importar telas*/
import Inicial from './src/pages/Inicial';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import CadastroConcluido from './src/pages/CadastroConcluido';
import Home from './src/pages/Home';
import Fotos from './src/pages/Fotos';
import Configuracoes from './src/pages/Configuracoes';
import MinhasVagas from './src/pages/MinhasVagas';
import MeusDados from './src/pages/MeusDados';
import Perfil from './src/pages/Perfil';
import FormasPagamento from './src/pages/FormasPagamento';
import Busca from './src/pages/Busca';
import MeusCarros from './src/pages/MeusCarros';
/* importar telas*/


function App() {  

  const [fontsLoaded] = useFonts({
    'poppins_regular': require('./assets/fonts/poppins_regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='Screen_Inicial'
            component={Inicial} />
          <Stack.Screen
            name='Screen_Entrar'
            component={Login} />
          <Stack.Screen
            name='Screen_Cadastro'
            component={Cadastro} />
          <Stack.Screen
            name='Screen_CadastroConcluido'
            component={CadastroConcluido} />
          <Stack.Screen
            name='Screen_Home'
            component={Home} />
          <Stack.Screen
            name='Screen_Fotos'
            component={Fotos} />
          <Stack.Screen
            name='Screen_Configuracoes'
            component={Configuracoes} />
          <Stack.Screen
            name='Screen_MinhasVagas'
            component={MinhasVagas} />
          <Stack.Screen
            name='Screen_MeusDados'
            component={MeusDados} />
          <Stack.Screen
            name='Screen_Perfil'
            component={Perfil} />
          <Stack.Screen
            name='Screen_FormasPagamento'
            component={FormasPagamento} />
          <Stack.Screen
            name='Screen_Busca'
            component={Busca} />
          <Stack.Screen
            name='Screen_MeusCarros'
            component={MeusCarros} />  
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
 
export default App;



{/* <View style={css_Inicial.inputView}>
      <TextInput
        style={css_Inicial.TextInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>

    <View style={css_Inicial.inputView}>
      <TextInput
        style={css_Inicial.TextInput}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>     */}

