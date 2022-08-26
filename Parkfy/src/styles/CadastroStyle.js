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


const css_Cadastro = StyleSheet.create({
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
      top: PixelRatio.roundToNearestPixel(148),
      left: PixelRatio.roundToNearestPixel(18),
    },
    
    senhaText: {
      fontSize: 16,
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: 16,
    },
    
    forgotView: {
      alignItems: "center",
      top: PixelRatio.roundToNearestPixel(173)
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
      top: 25,
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
      top: PixelRatio.roundToNearestPixel(65),
    }
    
  });

  export{css_Cadastro};