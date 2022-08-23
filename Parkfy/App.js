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
          component={Screen_Inicial} />
        <Stack.Screen
          name='Screen_Entrar'
          component={Screen_Entrar} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}
 
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

      <Image style={css_Inicial.image} source={require("./assets/logo.png")} />

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

function Screen_Entrar({navigation}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const closeButton = () => {
    navigation.navigate('Screen_Inicial')
  }
 
  return (
    <View style={css_Entrar.entrarBody}>
      
      <TouchableOpacity onPress={closeButton} style={css_Entrar.closeBtn}>
        <Image source={require("./assets/close.png")}/>
      </TouchableOpacity>
      
      <View style={css_Entrar.emailView}>
        <TextInput
         style={css_Entrar.emailText}
         placeholder="Email"
         placeholderTextColor="#BDBDBD"
         autoCapitalize = "none"
        />
      </View>

      <Text style={css_Entrar.entrarLoginText}>Entrar</Text>
      
      <TouchableOpacity>
        <Text style={css_Entrar.cadastroBtn}>Cadastre-se</Text>
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
 
      <TouchableOpacity>
        <Text style={css_Entrar.forgotBtn}>Esqueci minha senha</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={css_Entrar.loginBtn}>
        <Text style={css_Entrar.loginText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}
const css_Entrar = StyleSheet.create({
  entrarLoginText: {
    fontSize: 30,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 30,
    textAlign: "center",
    color: "#000000",
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
    top: PixelRatio.roundToNearestPixel(110),
    left: PixelRatio.roundToNearestPixel(18),
  },
  
  senhaText: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
  },
  
  forgotBtn: {
    height: PixelRatio.roundToNearestPixel(19),
    width: PixelRatio.roundToNearestPixel(136),
    top: PixelRatio.roundToNearestPixel(140),
    color: "#2DCDB0",
    marginLeft: PixelRatio.roundToNearestPixel(130)
  },
  
  loginBtn: {
    display: 'flex',
    flexDirection:"column",
    alignItems: 'center',
    padding:(16,16),
    position: "absolute",
    height: PixelRatio.roundToNearestPixel(56),
    top: PixelRatio.roundToNearestPixel(310),
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
  
  cadastroBtn: {
    textAlign: "right",
    marginRight: PixelRatio.roundToNearestPixel(20),
    top: PixelRatio.roundToNearestPixel(-5),
    color: "#2DCDB0",
  },
  
  closeBtn: {
    marginLeft: 25,
    top: 65
  }
  
});


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

export default App;