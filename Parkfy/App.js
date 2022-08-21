import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/logo.png")} />
      <TouchableOpacity>
        <Text style={styles.forgot_button}>A gente procura, você estaciona</Text>
      </TouchableOpacity>
 
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.entrarBtn}>
        <Text style={styles.entrarText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cadastrarBtn}>
        <Text style={styles.cadastrarText}>Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.visitanteText}>Acessar como visitante</Text>
      </TouchableOpacity>
      
      {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>     */}
 
     
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
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