import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from 'Assets/style';

const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    sectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: screenHeight * 0.25,
        backgroundColor: COLORS.BACKGROUND
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: '8%'
    },
    buttonTxt: {
        fontSize: FONTS.FONTSIZE.TEXT.X_SMALL - 1
    },
    srcDestView: { 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        height: 100 
    },
    swapIcon: {
        position: 'absolute',
        top: '30%',
        left: '45%',
    },
    innerView: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10, 
        paddingHorizontal: 10, 
        backgroundColor: COLORS.BACKGROUND, 
        width: '45%'
     },
     title: { 
         fontSize: FONTS.FONTSIZE.TEXT.X_LARGE - 1, 
         fontWeight: 'bold', 
         color: COLORS.WHITE 
        },
    subTitle: { 
        fontSize: 11, 
        color: COLORS.WHITE 
    },    
    searchButton: {
        height: 70,
        width: '92.5%',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
        marginBottom:50
    },
    searchButtonTxt: {
        fontSize: FONTS.FONTSIZE.TEXT.LARGE,
        fontWeight: 'bold'
    }
})

export default styles;