import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AntDesignIcon, Ionicons } from '../../../assets/icons';
import { FONTS, COLORS } from '../../../assets/style';
import { IconButton } from '../../../components';

const Counter = ({
    label,
    subLabel,
    iconSize,
    labelStyle,
    count,
    setCount
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Ionicons
                    name={"man-sharp"}
                    size={iconSize}
                    color={COLORS.PRIMARY_COLOR}
                />
                <Text style={[styles.label, labelStyle]}>
                    {label}{'\n'}
                    <Text style={styles.subLabel}>
                        {subLabel}
                    </Text>
                </Text>
            </View>
            <View style={styles.counterContainer}>
                <IconButton
                    style={styles.minusButton}
                    icon={
                        <AntDesignIcon
                            name={'minus'}
                            size={22}
                            color={COLORS.WHITE}
                        />
                    }
                    onPress={() => count && setCount(count - 1)}
                />
                <Text style={styles.counter}>{count}</Text>
                <IconButton
                    style={styles.plusButton}
                    icon={
                        <AntDesignIcon
                            name={'plus'}
                            size={22}
                            color={COLORS.WHITE}
                        />
                    }
                    onPress={() => setCount(count + 1)}
                />
            </View>
        </View>

    )
}

export default Counter;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginVertical: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontSize: FONTS.FONTSIZE.TEXT.LARGE,
        fontWeight: 'bold',
        color: COLORS.WHITE
    },
    subLabel: {
        fontSize: 10,
        fontWeight: 'normal'
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '35%',
        justifyContent: 'space-between'
    },
    minusButton: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: COLORS.BACKGROUND
    },
    counter: {
        fontSize: 31,
        fontWeight: 'bold',
        color: COLORS.WHITE
    },
    plusButton: {
        height: 30,
        width: 30,
        borderRadius: 15
    }
})