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


const css_Busca = StyleSheet.create({
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

textoPrincipalView: {
  backgroundColor:'white',
  alignItems: "center",
  top: 70,
  height:30,
},

textoPrincipalText: {
  fontFamily:"poppins_regular",
  position: 'absolute',
  fontSize: PixelRatio.roundToNearestPixel(30),
  fontWeight: '700',
  fontStyle: "normal",
  lineHeight: 20,
  textAlign: "center",
  color: "#000000",
  paddingTop: 15
  
}, 

boxColumn: {
  borderColor:'#E8E8E8',
  borderWidth:1,
  width: PixelRatio.roundToNearestPixel(343),
  backgroundColor:'#F6F6F6',
  borderRadius: PixelRatio.roundToNearestPixel(100),
  top: PixelRatio.roundToNearestPixel(100),
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
  marginLeft: 20,
  height: 50,
},

searchView:{
  marginTop:'35%',
  backgroundColor:'white',
  alignItems: 'flex-start',
  height:30,
},

searchText: {
  position:'absolute',
  fontSize: 24,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 24,
  marginLeft: 15,
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
voltarText: {
  fontSize: 20,
  position: "absolute",
  color: "#2DCDB0",
  marginRight: 10,
  marginTop:60,
  width: PixelRatio.roundToNearestPixel(50),
  height: PixelRatio.roundToNearestPixel(20),
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
  position:'absolute',
  marginTop:1,
  width: PixelRatio.roundToNearestPixel(16),
  height: PixelRatio.roundToNearestPixel(10),
  marginLeft: PixelRatio.roundToNearestPixel(25),
  top: PixelRatio.roundToNearestPixel(16),
},

footerBase:{
  position:'relative',
  width: PixelRatio.roundToNearestPixel(400),
  height: PixelRatio.roundToNearestPixel(26),
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
    borderTopWidth: 68,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderLeftWidth: 68,
    borderRightColor: 'white',
    borderRightWidth: 68,
    borderBottomColor: 'white',
    borderBottomWidth: 68, 
    borderTopLeftRadius: 68,
    borderTopRightRadius: 68,
    borderBottomRightRadius: 68,
    borderBottomLeftRadius: 68,
    transform: [
      {rotate: '45deg'}
    ],
    position:'absolute',
  
  bottom: 1,
},

footermeialuass:{
    width: 0,
    height: 0,
    borderTopWidth:70,
    borderTopColor: '#2DCDB0',
    borderLeftColor: '#2DCDB0',
    borderLeftWidth: 70,
    borderRightColor: 'white',
    borderRightWidth: 70,
    borderBottomColor: 'white',
    borderBottomWidth: 70, 
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    transform: [
      {rotate: '45deg'}
    ],
    position:'absolute',
    bottom:PixelRatio.roundToNearestPixel(0),

    
    },

searchBtn: {
    bottom: 60
}

});

export{css_Busca};