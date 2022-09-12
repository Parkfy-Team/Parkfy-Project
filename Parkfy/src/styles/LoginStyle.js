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


const css_Entrar = StyleSheet.create({
    body:{
      flex: 1,
      backgroundColor: "white",      
    },
  
    boxColumn: {
    borderColor:'#E8E8E8',
    borderWidth:1,
    width: PixelRatio.roundToNearestPixel(343),
    backgroundColor:'#F6F6F6',
    borderRadius: PixelRatio.roundToNearestPixel(8),
    top: PixelRatio.roundToNearestPixel(145),
    left: PixelRatio.roundToNearestPixel(30),
    height: PixelRatio.roundToNearestPixel(50),
    margin: 5,
  },
    
    textColumn: {
    position:'absolute',
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
    marginLeft: 10,
    height: 20,
    width: 270,
    top: 15,
  },
    
    container:{
    flexDirection:'column',
    position:'relative',
    alignItems: 'flex-start',
    width: PixelRatio.roundToNearestPixel(3),
  },
  
    entrarLoginText: {
      position: 'absolute',
      fontSize: 30,
      fontWeight: "600",
      fontStyle: "normal",
      lineHeight: 30,
      textAlign: "center",
      color: "#000000",
    },
    
    entrarLoginView: {
      alignItems: "center",
      top: 85,
    },
    
    mostrarSenhaText: {
      position: "absolute",
      color: "#2DCDB0",
      right: PixelRatio.roundToNearestPixel(10),
      top: PixelRatio.roundToNearestPixel(17),
    },
    
    forgotView: {
      alignItems: "center",
      top: PixelRatio.roundToNearestPixel(170)
    },
    
    forgotText: {
      position: "absolute",
      color: "#2DCDB0",
    },
    
    loginBtn: {
      display: 'flex',
      flexDirection:"column",
      alignItems: 'center',
      padding:(16,16),
      position: "absolute",
      height: PixelRatio.roundToNearestPixel(56),
      top: PixelRatio.roundToNearestPixel(335),
      width: PixelRatio.roundToNearestPixel(343),
      backgroundColor: '#2DCDB0',
      borderRadius: PixelRatio.roundToNearestPixel(100),
      marginLeft: PixelRatio.roundToNearestPixel(35)
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
    
    cadastroView: {
      position: "absolute",
      top: 90,
      right: PixelRatio.roundToNearestPixel(25),
      width: PixelRatio.roundToNearestPixel(70),
      height: PixelRatio.roundToNearestPixel(15),
      color: "#2DCDB0",
    },
    
    cadastroBtn: {
      color: "#2DCDB0"
    },
    
    closeBtn: {
      position: "absolute",
      marginLeft: PixelRatio.roundToNearestPixel(25),
      top: PixelRatio.roundToNearestPixel(85),
    }
    
  });

  export{css_Entrar};
