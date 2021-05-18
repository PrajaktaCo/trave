import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'Themes/style';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    backgroundImg: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    cardContainer: {
        backgroundColor: COLORS.BACKGROUND,
        paddingTop: 10
    },
    sectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingVertical: 15
    },
    cardHeader: {
        fontSize: FONTS.FONTSIZE.TEXT.MEDIUM,
        color: COLORS.WHITE,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    cardImg: {
        height: 250,
        width: '100%',
        borderRadius: 15
    },
    smallTxt: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,
        fontSize: FONTS.FONTSIZE.TEXT.X_SMALL - 2
    },
    medTxt: {
        color: 'white',
        paddingTop: 25,
        fontSize: FONTS.FONTSIZE.TEXT.MEDIUM,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    closeIcon: {
        backgroundColor: COLORS.PRIMARY_COLOR,
        width: 35,
        height: 30,
        borderBottomRightRadius: 15
    },
    cardContainerII: {
        flexDirection: 'row',
        backgroundColor: COLORS.BACKGROUND,
        justifyContent: 'space-between'
    },
    txtContainer: {
        width: '55%',
        alignItems: 'center',
        marginRight: '3%'
    }
})

export default styles;