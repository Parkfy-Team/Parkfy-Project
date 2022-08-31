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


const css_Home = StyleSheet.create({
body:{
    flex: 1,
    backgroundColor: "white",
    alignContent:'center',
    minHeight: "100%",
    position: 'relative',
    flexWrap:'nowrap'
},
container:{
  flexDirection:'column',
  position:'relative',
  alignItems: 'flex-start',
  width: PixelRatio.roundToNearestPixel(343),
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
  top: 40,
},

boxColumn: {
  borderColor:'#E8E8E8',
  borderWidth:1,
  width: PixelRatio.roundToNearestPixel(343),
  backgroundColor:'#F6F6F6',
  borderRadius: PixelRatio.roundToNearestPixel(8),
  top: PixelRatio.roundToNearestPixel(70),
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

mostrarSenhaView: {
  position:'absolute',
  marginTop: 10,
  height: PixelRatio.roundToNearestPixel(30),
  width: PixelRatio.roundToNearestPixel(80),
  alignItems:'center',    
  marginLeft: PixelRatio.roundToNearestPixel(270),
},

mostrarSenhaText: {
  marginTop:3,
  fontSize: 15,
  position: "absolute",
  color: "#2DCDB0",
  marginRight: 10,
}, 


cadastroBtn: {
  marginTop:100,
  alignItems: 'center',
  padding:(16,16),
  height: PixelRatio.roundToNearestPixel(56),
  width: PixelRatio.roundToNearestPixel(343),
  backgroundColor: '#2DCDB0',
  borderRadius: PixelRatio.roundToNearestPixel(100),
  marginLeft: PixelRatio.roundToNearestPixel(25),
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
  top: 20,
  left: PixelRatio.roundToNearestPixel(330),
  width: PixelRatio.roundToNearestPixel(47),
  height: PixelRatio.roundToNearestPixel(20),
  color: "#2DCDB0",
},

entrarBtn: {
  fontSize: 15,
  textAlign:'right',
  color: "#2DCDB0",
  fontFamily:'Inter-Regular',

},

closeBtn: {
  marginTop:1,
  width: PixelRatio.roundToNearestPixel(16),
  height: PixelRatio.roundToNearestPixel(10),
  marginLeft: PixelRatio.roundToNearestPixel(20),
  top: PixelRatio.roundToNearestPixel(30),
},

footerBase:{
  position:'relative',
  width: PixelRatio.roundToNearestPixel(400),
  height: PixelRatio.roundToNearestPixel(50),
  backgroundColor:'white',
  paddingBottom:0,
},
footerBaseContorno:{
  position:'relative',
  backgroundColor:'#2DCDB0',
  width: PixelRatio.roundToNearestPixel(400),
  height: PixelRatio.roundToNearestPixel(3),
},

footerMeiaLua:{
  width: 0,
    height: 0,
    borderTopWidth: 48,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderLeftWidth: 48,
    borderRightColor: 'transparent',
    borderRightWidth: 48,
    borderBottomColor: 'transparent',
    borderBottomWidth: 48, 
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomRightRadius: 48,
    borderBottomLeftRadius: 48,
    transform: [
      {rotate: '45deg'}
    ],
    position:'absolute',
  
  bottom:-8,
},

footermeialuass:{
    width: 0,
    height: 0,
    borderTopWidth: 50,
    borderTopColor: '#2DCDB0',
    borderLeftColor: '#2DCDB0',
    borderLeftWidth: 50,
    borderRightColor: 'transparent',
    borderRightWidth: 50,
    borderBottomColor: 'transparent',
    borderBottomWidth: 50, 
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    transform: [
      {rotate: '45deg'}
    ],
    position:'absolute',
    bottom:PixelRatio.roundToNearestPixel(-10),

    
}

});

export{css_Home};