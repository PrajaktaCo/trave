import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import styles from './styles'
import { COLORS } from '../../../assets/style';

const CustomHeader = ({
    title
}) => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTxt}>{title} </Text>
                <SimpleLineIcons name="globe" color={COLORS.PRIMARY_COLOR} size={30} />
            </View>
        </View>
    );
}

export default CustomHeader;