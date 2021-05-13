import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'Themes/style';

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BACKGROUND
    },
    headerLeft: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTxt: {
        fontSize: 18,
        color: COLORS.WHITE
    },
    headerRight: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between'
    },
    dateContainer: {
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    month: {
        width: 50
    },
    monthTxt: {
        color: COLORS.WHITE,
        fontSize: FONTS.FONTSIZE.TEXT.SMALL
    },
    section: {
        height: 60,
        width: 60,
        marginTop: 15,
        marginRight: 20
    },
    date: {
        fontSize: FONTS.FONTSIZE.TEXT.LARGE,
        color: COLORS.WHITE
    },
    listContainer: {
        backgroundColor: COLORS.BLACK,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    subHeaderTxt: {
        fontSize: FONTS.FONTSIZE.TEXT.MEDIUM,
        fontWeight: 'bold',
        color: COLORS.WHITE,
        marginHorizontal: 15,
        marginVertical: 15
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20
    },
    placeDate: {
        fontSize: FONTS.FONTSIZE.TEXT.LARGE,
        textAlign: 'center'
    },
    timeContainer: {
        alignItems: 'center',
        width: '70%'
    },
    timeTxt: {
        color: 'darkgrey',
        top: 5,
        fontSize: 12
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nonstopTxt: {
        color: 'darkgrey',
        bottom: 5,
        fontSize: 12
    },
    dashedDivider: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftSemiCircle: {
        height: 15,
        width: 10,
        backgroundColor: COLORS.BLACK,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    rightSemiCircle: {
        height: 15,
        width: 10,
        backgroundColor: COLORS.BLACK,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 10
    },
    leftFooter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftFooterTxt: {
        color: 'darkgrey',
        marginLeft: '10%'
    },
    number: {
        textAlign: 'center',
        fontSize: FONTS.FONTSIZE.TEXT.LARGE,
        fontWeight: 'bold',
        color: 'green'
    },
    priceTxt: {
        fontSize: FONTS.FONTSIZE.TEXT.SMALL,
        fontWeight: '300',
        color: 'red'
    }
})

export default styles;