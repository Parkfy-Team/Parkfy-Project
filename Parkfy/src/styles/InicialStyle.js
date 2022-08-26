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
  TurboModuleRegistry} from 'react-native';

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

export{css_Inicial};
