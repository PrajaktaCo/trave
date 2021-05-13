import * as React from 'react';
import { View } from 'react-native';

import styles from './styles';

const CustomCard = ({children, style}) => {
    return (
        <View style={[styles.containerStyle, style]}>
           {children}
        </View>
    );
}

export default CustomCard;