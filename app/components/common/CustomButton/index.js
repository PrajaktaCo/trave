import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';

const CustomButton = ({ children, style }) => {
    return (
        <View style={[styles.wrapper, style]} >
            {children}
        </View>
  )
}

export default CustomButton;