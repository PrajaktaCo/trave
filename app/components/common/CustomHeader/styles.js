import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../assets/style';

const styles = StyleSheet.create({
    containerStyle: {
        height: 60,
        width: 400,
        backgroundColor: COLORS.BLACK,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    headerContainer: { 
        alignItems: 'center', 
        flexDirection: 'row' 
    },
    headerTxt: {
        fontSize: FONTS.FONTSIZE.HEADER_TEXT.LARGE,
        fontWeight: 'bold',
        color: COLORS.HEADER_TEXT
    }
})

export default styles;