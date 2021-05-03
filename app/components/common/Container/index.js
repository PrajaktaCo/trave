import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';

const Container = ({ children, style }) => {
    return (
        <ScrollView>
            {children}
        </ScrollView>
    )
}

export default Container;