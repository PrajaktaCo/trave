import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../assets/style';

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center'
    },
    sectionStyle: {
        height: 90,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e67709',
        borderRadius: 10,
    },
    label: {
        fontSize: FONTS.FONTSIZE.TEXT.X_SMALL,
        color: COLORS.WHITE,
        paddingTop: 10,
        fontWeight: '600'
    }
})
export default styles;