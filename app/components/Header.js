import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { COLORS } from '../assets/style';

const Header = ({
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

const styles = StyleSheet.create({
    containerStyle: {
        height: 60,
        width: 400,
        backgroundColor: COLORS.BLACK,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    headerContainer: { 
        alignItems: 'center', 
        flexDirection: 'row' 
    },
    headerTxt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.HEADER_TEXT
    }
})
export default Header;