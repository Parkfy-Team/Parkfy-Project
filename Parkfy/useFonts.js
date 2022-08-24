import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    poppins: require('./assets/fonts/poppins_regular.ttf'),
  });