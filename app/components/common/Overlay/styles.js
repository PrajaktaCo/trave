import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../assets/style';

const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    containerStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'flex-end'
    }
})

export default styles;