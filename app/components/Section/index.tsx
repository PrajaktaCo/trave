import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

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

export default Section;


