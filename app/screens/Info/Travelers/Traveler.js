import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../assets/style';
import { Ionicons, EvilIcons } from '../../../assets/icons';

const Traveler = ({
    setTravelerModel
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Ionicons
                    name={'person-circle-outline'}
                    color={COLORS.WHITE}
                    size={28}
                />
                <Text style={styles.title}>1 Adult</Text>
                <Text style={styles.subTitle}>Ecomomy</Text>
            </View>
            <EvilIcons
                name={'chevron-down'}
                color={COLORS.WHITE}
                size={31}
                onPress={() => setTravelerModel(true)}
            />
        </View>
    )
}

export default Traveler;

const styles = StyleSheet.create({
    container: {
        height: 65,
        backgroundColor: COLORS.BACKGROUND,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: '1%'
    },
    innerContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    title: {
        fontWeight: '700',
        fontSize: FONTS.FONTSIZE.TEXT.LARGE,
        textAlign: 'center',
        color: COLORS.WHITE
    },
    subTitle: {
        fontSize: 18,
        textAlign: 'center',
        color: COLORS.WHITE
    }
})