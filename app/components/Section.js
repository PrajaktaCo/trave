import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../assets/style';

const Section = ({ label, icon, style, onPress }) => {
    return (
        <View style={styles.containerStyle}>
            <TouchableOpacity
                style={[styles.sectionStyle, style]}
                onPress={onPress}
            >
                {icon}
            </TouchableOpacity>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

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
export default Section;


