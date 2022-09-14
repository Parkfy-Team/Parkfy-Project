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


const css_Camera = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    
    fotoBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2DCDB0',
        margin: PixelRatio.roundToNearestPixel(20),
        borderRadius: PixelRatio.roundToNearestPixel(10),
        height: PixelRatio.roundToNearestPixel(70),
    },
    
    camera: {
        flex: 1,
    },
    
    viewTakePicture: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    
    buttonTakePicture: {
        position: 'absolute',
        bottom: PixelRatio.roundToNearestPixel(20),
        left: PixelRatio.roundToNearestPixel(20)
    },
    
    viewSendPicture: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: PixelRatio.roundToNearestPixel(20)
    },
    
    buttonSendPicture: {
        margin: PixelRatio.roundToNearestPixel(10)
    },
    
    pictureTaken: {
        width: '100%',
        height: PixelRatio.roundToNearestPixel(500),
        borderRadius: PixelRatio.roundToNearestPixel(20)
    },
});

export{css_Camera};