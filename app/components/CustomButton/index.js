import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const CustomButton = ({ label, onPress, style, labelStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.wrapper, style]}
            onPress={onPress}
        >
            <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;