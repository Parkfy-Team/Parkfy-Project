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


const css_Fotos = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
    
    quaseLaText: {
        fontFamily:"poppins_regular",
        position:'absolute',
        color: 'white',
        top: PixelRatio.roundToNearestPixel(5),
        left: PixelRatio.roundToNearestPixel(20),
        fontWeight: '500',
        fontSize: PixelRatio.roundToNearestPixel(40),
        lineHeight: PixelRatio.roundToNearestPixel(45),
    },
    
    fotoText: {
        fontFamily:"poppins_regular",
        position:'absolute',
        color: 'grey',
        top: PixelRatio.roundToNearestPixel(55),
        left: PixelRatio.roundToNearestPixel(20),
        fontWeight: '500',
        fontSize: PixelRatio.roundToNearestPixel(20),
        lineHeight: PixelRatio.roundToNearestPixel(40),
        textAlign: 'justify',
    },
    
    fotoDocRequestText: {
        fontFamily:"poppins_regular",
        position:'absolute',
        color: 'grey',
        top: PixelRatio.roundToNearestPixel(180),
        left: PixelRatio.roundToNearestPixel(20),
        fontWeight: '500',
        fontSize: PixelRatio.roundToNearestPixel(20),
        lineHeight: PixelRatio.roundToNearestPixel(40),
        textAlign: 'justify',
    },
    
    fotoDocBtn: {
        display: 'flex',
        flexDirection:"column",
        alignItems: 'center',
        padding:(16,16),
        position: "absolute",
        height: PixelRatio.roundToNearestPixel(56),
        top: PixelRatio.roundToNearestPixel(270),
        width: PixelRatio.roundToNearestPixel(343),
        backgroundColor: '#2DCDB0',
        borderRadius: PixelRatio.roundToNearestPixel(100),
        marginLeft: PixelRatio.roundToNearestPixel(25)
    },
    
    fotoDocText: {
        width: PixelRatio.roundToNearestPixel(80),
        height: PixelRatio.roundToNearestPixel(24),
        color:'white',
        fontWeight: '600',
        fontSize: PixelRatio.roundToNearestPixel(18),
        lineHeight: PixelRatio.roundToNearestPixel(24),
        textAlign: 'center',
    },
    
    selfieRequestText: {
        fontFamily:"poppins_regular",
        position:'absolute',
        color: 'grey',
        top: PixelRatio.roundToNearestPixel(340),
        left: PixelRatio.roundToNearestPixel(20),
        fontWeight: '500',
        fontSize: PixelRatio.roundToNearestPixel(20),
        lineHeight: PixelRatio.roundToNearestPixel(40),
        textAlign: 'justify',
    },
    
    selfieBtn: {
        display: 'flex',
        flexDirection:"column",
        alignItems: 'center',
        padding:(16,16),
        position: "absolute",
        height: PixelRatio.roundToNearestPixel(56),
        bottom: PixelRatio.roundToNearestPixel(115),
        width: PixelRatio.roundToNearestPixel(343),
        backgroundColor: '#2DCDB0',
        borderRadius: PixelRatio.roundToNearestPixel(100),
        marginLeft: PixelRatio.roundToNearestPixel(25)
    },
    
    selfieText: {
        width: PixelRatio.roundToNearestPixel(80),
        height: PixelRatio.roundToNearestPixel(24),
        color:'white',
        fontWeight: '600',
        fontSize: PixelRatio.roundToNearestPixel(18),
        lineHeight: PixelRatio.roundToNearestPixel(24),
        textAlign: 'center',
    },
    
    enviarBtn: {
        display: 'flex',
        flexDirection:"column",
        alignItems: 'center',
        padding:(16,16),
        position: "absolute",
        height: PixelRatio.roundToNearestPixel(56),
        bottom: PixelRatio.roundToNearestPixel(35),
        width: PixelRatio.roundToNearestPixel(120),
        backgroundColor: '#2DCDB0',
        borderRadius: PixelRatio.roundToNearestPixel(100),
        marginLeft: PixelRatio.roundToNearestPixel(140)
    },
    
    enviarText: {
        width: PixelRatio.roundToNearestPixel(80),
        height: PixelRatio.roundToNearestPixel(24),
        color:'white',
        fontWeight: '600',
        fontSize: PixelRatio.roundToNearestPixel(18),
        lineHeight: PixelRatio.roundToNearestPixel(24),
        textAlign: 'center',
    },

});

export{css_Fotos};