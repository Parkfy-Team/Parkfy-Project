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
    top: PixelRatio.roundToNearestPixel(90),
    left: PixelRatio.roundToNearestPixel(18),
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
    height: 45,
  },
    
    container:{
    flexDirection:'column',
    position:'relative',
    alignItems: 'flex-start',
    width: PixelRatio.roundToNearestPixel(343),
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
      top: 30,
    },
    
    mostrarSenhaText: {
      position: "absolute",
      color: "#2DCDB0",
      right: PixelRatio.roundToNearestPixel(10),
      top: PixelRatio.roundToNearestPixel(13),
    },
    
    forgotView: {
      alignItems: "center",
      top: PixelRatio.roundToNearestPixel(115)
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
      top: PixelRatio.roundToNearestPixel(300),
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
    
    cadastroView: {
      position: "absolute",
      top: 35,
      left: PixelRatio.roundToNearestPixel(300),
      width: PixelRatio.roundToNearestPixel(80),
      height: PixelRatio.roundToNearestPixel(20),
      color: "#2DCDB0"
    },
    
    cadastroBtn: {
      color: "#2DCDB0"
    },
    
    closeBtn: {
      width: PixelRatio.roundToNearestPixel(16),
      height: PixelRatio.roundToNearestPixel(16),
      marginLeft: PixelRatio.roundToNearestPixel(20),
      top: PixelRatio.roundToNearestPixel(53),
    }
    
  });

  export{css_Entrar};
