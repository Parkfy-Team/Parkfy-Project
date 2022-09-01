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


const css_CadastroConcluido = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
    
    image: {
        position:'absolute',
        top: PixelRatio.roundToNearestPixel(40),
        left: '25%',      
        width:PixelRatio.roundToNearestPixel(200),
        height:PixelRatio.roundToNearestPixel(200),
    },
    
    cadastroConcluidoText: {
        fontFamily:"poppins_regular",
        position:'absolute',
        color: 'white',
        top: PixelRatio.roundToNearestPixel(265),
        left: PixelRatio.roundToNearestPixel(40),
        textAlign: 'center',
        fontWeight: '500',
        fontSize: PixelRatio.roundToNearestPixel(30),
        lineHeight: PixelRatio.roundToNearestPixel(45),
    },
    
    cadastroMessageText: {
        fontFamily:"poppins_regular",
        position:'absolute',
        color: 'grey',
        top: PixelRatio.roundToNearestPixel(320),
        left: PixelRatio.roundToNearestPixel(40),
        fontWeight: '500',
        fontSize: PixelRatio.roundToNearestPixel(20),
        textAlign: 'center',
    },
    
    okBtn: {
        display: 'flex',
        flexDirection:"column",
        alignItems: 'center',
        padding:(16,16),
        position: "absolute",
        height: PixelRatio.roundToNearestPixel(56),
        bottom: PixelRatio.roundToNearestPixel(130),
        width: PixelRatio.roundToNearestPixel(343),
        backgroundColor: '#2DCDB0',
        borderRadius: PixelRatio.roundToNearestPixel(100),
        marginLeft: PixelRatio.roundToNearestPixel(25)
    },
    
    okText: {
        width: PixelRatio.roundToNearestPixel(80),
        height: PixelRatio.roundToNearestPixel(24),
        color:'white',
        fontWeight: '600',
        fontSize: PixelRatio.roundToNearestPixel(18),
        lineHeight: PixelRatio.roundToNearestPixel(24),
        textAlign: 'center',
    },

});

export{css_CadastroConcluido};