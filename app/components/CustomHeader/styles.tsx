import { StyleSheet , Dimensions} from 'react-native';
import { COLORS, FONTS } from 'Assets/style';

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    containerStyle: {
        height: 60,
        width: screenWidth,
        backgroundColor: COLORS.BACKGROUND,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth:1,
        borderBottomColor:COLORS.BLACK
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