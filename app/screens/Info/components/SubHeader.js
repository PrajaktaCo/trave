import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../../assets/style';

const SubHeader = ({ label, icon }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
            {icon}
        </View>
    )
}

export default SubHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    title: {
        fontSize: FONTS.FONTSIZE.TEXT.MEDIUM,
        fontWeight: 'bold',
        color: COLORS.WHITE
    }
})