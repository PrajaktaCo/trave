import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from 'Themes/style';
import { EvilIcons } from 'Assets/icons';

const Date = ({
    setDateModel
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.innerContainer}
                onPress={() => setDateModel(true)}
            >
                <EvilIcons
                    name={'calendar'}
                    color={COLORS.WHITE}
                    size={31}
                />
                <Text style={styles.title}>Select Date{'\n'}
                    <Text style={styles.subTitle}>Departure Date
                    </Text>
                </Text>
            </TouchableOpacity>
            <View
                style={[styles.innerContainer, { marginRight: '10%' }]}>
                <EvilIcons
                    name={'calendar'}
                    color={COLORS.WHITE}
                    size={31}
                />
                <Text style={styles.title}>28 Apr{'\n'}
                    <Text style={styles.subTitle}>Sunday
                    </Text>
                </Text>
            </View>
        </View>
    )
}

export default Date;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BACKGROUND,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '3%',
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontWeight: '700',
        fontSize: FONTS.FONTSIZE.TEXT.LARGE,
        textAlign: 'center',
        color: COLORS.WHITE
    },
    subTitle: {
        fontSize: 10,
        fontWeight: '600'
    }
})