import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {ScrollView,
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
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name='Screen_Inicial'
          component={Screen_Inicial}
        />
        <Stack.Screen 
          name='Screen_Entrar'          
          component={Screen_Entrar}
        />            
      </Stack.Navigator>
    </NavigationContainer>
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

    <TouchableOpacity>
      <Text style={css_Inicial.visitanteText}>Acessar como visitante</Text>
    </TouchableOpacity>
  </View>
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
    top: PixelRatio.roundToNearestPixel(141),
    bottom: '55%',
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
    top: '50%',
    fontWeight: '400',
    fontSize: PixelRatio.roundToNearestPixel(65),
    lineHeight: PixelRatio.roundToNearestPixel(90),
    textAlign: 'center',
  },
  sloganText: {
    position:'absolute',
    color: 'grey',
    top: '50%',
    fontWeight: '400',
    fontSize: PixelRatio.roundToNearestPixel(20),
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
    bottom: '10%',
    height: PixelRatio.roundToNearestPixel(19),
    bottom: PixelRatio.roundToNearestPixel(76),
    fontWeight: '600',
    fontSize: PixelRatio.roundToNearestPixel(20),
    lineHeight: PixelRatio.roundToNearestPixel(19),
    color:'#2DCDB0',
    opacity: 0.7,
    alignContent:'center',
  }
});

function Screen_Entrar(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={css_Entrar.emailView}>

      <View style={css_Entrar.emailText}>
        <TextInput
         style={css_Entrar.emailText}
         placeholder="Email"
         placeholderTextColor="#BDBDBD"
         autoCapitalize = "none"
        />
      </View>

      <Text style={css_Entrar.entrarLoginText}>Entrar</Text>

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
        <Text style={css_Entrar.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={css_Entrar.loginBtn}>
        <Text style={css_Entrar.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
}
const css_Entrar = StyleSheet.create({
  emailView:{
    width: PixelRatio.roundToNearestPixel(343),
    height: PixelRatio.roundToNearestPixel(46),
    display: 'flex',
    flexDirection:"column",
    alignItems:"center",
    padding:(15,15),
    borderRadius: PixelRatio.roundToNearestPixel(8),
    backgroundColor: "#F6F6F6",
    borderWidth: PixelRatio.roundToNearestPixel(1),
    borderColor: "rgba(232, 232, 232, 1.0)",
    bottom: PixelRatio.roundToNearestPixel(80),
  },

  emailText:{
    height: PixelRatio.roundToNearestPixel(19),
    fontSize: PixelRatio.roundToNearestPixel(16),
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: PixelRatio.roundToNearestPixel(16),
    color: "black"
  },

  senhaView:{
    width: PixelRatio.roundToNearestPixel(343),
    height: PixelRatio.roundToNearestPixel(46),
    display: 'flex',
    flexDirection:"column",
    alignItems:"flex-start",
    padding:(15,15),
    borderRadius: PixelRatio.roundToNearestPixel(8),
    backgroundColor: "#F6F6F6",
    borderWidth: PixelRatio.roundToNearestPixel(1),
    borderColor: "rgba(232, 232, 232, 1.0)",
    bottom: PixelRatio.roundToNearestPixel(100),
  },

  senhaText:{
    height: PixelRatio.roundToNearestPixel(19),
    fontSize: PixelRatio.roundToNearestPixel(16),
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: PixelRatio.roundToNearestPixel(16),
    color: "black"
  },

  entrarLoginText: {
    width: PixelRatio.roundToNearestPixel(89),
    height: PixelRatio.roundToNearestPixel(36),
    fontSize: PixelRatio.roundToNearestPixel(30),
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: PixelRatio.roundToNearestPixel(30),
    textAlign: "center",
    color: "#000000",
    bottom: PixelRatio.roundToNearestPixel(250)
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
 
  inputView: {
    backgroundColor: "#E8E8E8",
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20, 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    backgroundColor: '#E8E8E8',
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: 'grey',
  },
 
  entrarBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#2DCDB0",
    
  },
  entrarText:{
    color:'white',
  },

  cadastrarBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#2DCDB0",
  },
  cadastrarText:{
    width: 104,
    height: 24,
    color:'white',
    textAlign: "center",
  },

  visitanteText:{
    marginTop: 20,
    color: '#2DCDB0',
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