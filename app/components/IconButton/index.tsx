import React from 'react'
import { TouchableOpacity } from 'react-native';
import styles from './styles';

const IconButton = ({icon, style, onPress}) => {
    return (
        <TouchableOpacity
            style={[styles.containerStyle, style]}
            onPress = {onPress}            >
            {icon}
        </TouchableOpacity>
    )
}

export default IconButton;