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
    Modal,
  } from "react-native";
  
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from "@react-navigation/stack";
  const Stack = createStackNavigator();
  import { StatusBar, TurboModuleRegistry } from 'react-native';
  import { useFonts } from 'expo-font';
  import React, { useState, useEffect, useRef } from "react";
  import { Camera } from 'expo-camera';
  import { FontAwesome } from '@expo/vector-icons';
  import { Ionicons } from '@expo/vector-icons';
  import { MaterialCommunityIcons } from '@expo/vector-icons';


  import {css_Camera} from '../styles/CameraStyle.js';



  function Screen_Camera({ navigation }) {
    
    const camRef = useRef(null)
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [hasPermission, setHasPermission] = useState(null)
    const [capturedPhoto, setCapturedPhoto] = useState(null)
    const [open, setOpen] = useState(false)
    
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync()
        setHasPermission(status === 'granted')
      })()
    }, [])
    
    if (hasPermission === null) {
      return <View/>
    }
    
    if (hasPermission === false) {
      return <Text>O acesso à câmera foi negado.</Text>
    }
    
    async function takePicture() {
      if(camRef) {
        const data = await camRef.current.takePictureAsync()
        setCapturedPhoto(data.uri)
        setOpen(true)
      }
    }
  
    return (
      <View style={css_Camera.container}>
        <Camera
          style={css_Camera.camera}
          type={type}
          ref={camRef} 
        >
          <View style={css_Camera.viewTakePicture}>
            <TouchableOpacity style={css_Camera.buttonTakePicture}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
                );
              }}
            >
            <Ionicons name="camera-reverse" size={50} color="#FFF"/>
            </TouchableOpacity>
          </View>
        </Camera>
        
        <TouchableOpacity style={css_Camera.fotoBtn} onPress={ takePicture }>
          <FontAwesome name="camera" size={23} color="#FFF"/>
        </TouchableOpacity>
        
        {capturedPhoto && 
          <Modal
            animationType="slide"
            transparent={false}
            visible={open}
          >
          <View style={css_Camera.viewSendPicture}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Screen_Fotos')
              }} style={css_Camera.buttonSendPicture}>
              <MaterialCommunityIcons name="send-check" size={60} color="#2DCDB0" />
            </TouchableOpacity>
            <Image
              style={css_Camera.pictureTaken}
              source={{uri:capturedPhoto}}
            />
          </View>
          </Modal>
        }
      </View>
    );
  }
  

  module.exports = Screen_Camera;