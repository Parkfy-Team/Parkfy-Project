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
  body:{
      flex: 1,
      backgroundColor: "white",      
  },
  container:{
    flexDirection:'column',
    position:'relative',
    alignItems: 'flex-start',
    width: PixelRatio.roundToNearestPixel(3),
  },
  textoPrincipalText: {
    fontFamily:'Inter-Regular',
    position: 'absolute',
    fontSize: PixelRatio.roundToNearestPixel(30),
    fontWeight: '700',
    fontStyle: "normal",
    lineHeight: 30,
    textAlign: "center",
    color: "#000000",
  },
  
  textoPrincipalView: {
    alignItems: "center",
    top: 85,
  },
  
  boxColumn: {
    borderColor:'#E8E8E8',
    borderWidth:1,
    width: PixelRatio.roundToNearestPixel(343),
    backgroundColor:'#F6F6F6',
    borderRadius: PixelRatio.roundToNearestPixel(8),
    top: PixelRatio.roundToNearestPixel(150),
    left: PixelRatio.roundToNearestPixel(30),
    height: PixelRatio.roundToNearestPixel(50),
    margin: 7,
  },
  
  textColumn: {
    position:'absolute',
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
    marginLeft: 10,
    height: 50,
  },
  
  mostrarSenhaView: {
    position:'absolute',
    marginTop: 10,
    height: PixelRatio.roundToNearestPixel(30),
    width: PixelRatio.roundToNearestPixel(100),
    alignItems:'center',    
    marginLeft: PixelRatio.roundToNearestPixel(250),
  },
  
  mostrarSenhaText: {
    marginTop: 3,
    fontSize: 17,
    position: "absolute",
    color: "#2DCDB0",
    marginRight: 15,
}, 
  
  cadastroBtn: {
    marginTop:180,
    alignItems: 'center',
    padding:(16,16),
    height: PixelRatio.roundToNearestPixel(56),
    width: PixelRatio.roundToNearestPixel(343),
    backgroundColor: '#2DCDB0',
    borderRadius: PixelRatio.roundToNearestPixel(100),
    marginLeft: PixelRatio.roundToNearestPixel(30),
  },
  
  cadastroText: {
    width: PixelRatio.roundToNearestPixel(100),
    height: PixelRatio.roundToNearestPixel(24),
    color:'white',
    fontWeight: 'bold',
    fontSize: PixelRatio.roundToNearestPixel(20),
    lineHeight: PixelRatio.roundToNearestPixel(24),
    textAlign: 'center',
    fontFamily:'Inter-Regular',
  },
  
  entrarView: {
    position: "absolute",
    top: PixelRatio.roundToNearestPixel(88),
    left: PixelRatio.roundToNearestPixel(330),
    width: PixelRatio.roundToNearestPixel(60),
    height: PixelRatio.roundToNearestPixel(20),
    color: "#2DCDB0",
  },
  
  entrarBtn: {
    textAlign:'right',
    color: "#2DCDB0",
    fontFamily:'Inter-Regular',
    fontSize: PixelRatio.roundToNearestPixel(20)
  },
  
  closeBtn: {
      position: "absolute",
      marginLeft: PixelRatio.roundToNearestPixel(25),
      top: PixelRatio.roundToNearestPixel(85),
  }
  
});

  export{css_Cadastro};