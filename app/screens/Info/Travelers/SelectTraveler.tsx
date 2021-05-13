import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { EvilIcons, MaterialCommunityIcons } from 'Assets/icons';
import { FONTS, COLORS } from 'Assets/style';
import { Divider, Overlay, CustomButton } from 'Components';
import { Counter, SubHeader } from '../components';

const SelectTraveler = ({
    setTravelerModel,
    adultCount,
    childrenCount,
    infantCount,
    setAdultCount,
    setChildrenCount,
    setInfantCount
}) => {
    return (
        <Overlay>
            <View style={styles.container}>
                <SubHeader
                    label={'Travelers'}
                    icon={
                        <MaterialCommunityIcons
                            name={'close-box-outline'}
                            size={31}
                            color={COLORS.DISABLE}
                            onPress={() => setTravelerModel(false)}
                        />
                    }
                />
                <Divider />

                <View style={styles.innerContainer}>
                    <Text style={styles.label}>
                        Economy
                   </Text>
                    <EvilIcons
                        name={'chevron-down'}
                        color={COLORS.WHITE}
                        size={31}
                    />
                </View>
                <Counter
                    label={'Adults'}
                    subLabel={'12+years'}
                    iconSize={33}
                    labelStyle={{ marginLeft: '3%' }}
                    count={adultCount}
                    setCount={setAdultCount}
                />
                <Divider
                    style={{ height: 2, backgroundColor: COLORS.WHITE }} />
                <Counter
                    label={'Children'}
                    subLabel={'Under 12 years'}
                    iconSize={28}
                    labelStyle={{ marginLeft: '7%' }}
                    count={childrenCount}
                    setCount={setChildrenCount}
                />
                <Divider
                    style={{ height: 2, backgroundColor: COLORS.WHITE }} />
                <Counter
                    label={'Infants'}
                    subLabel={'Under 12 years'}
                    iconSize={18}
                    labelStyle={{ marginLeft: '13%' }}
                    count={infantCount}
                    setCount={setInfantCount}
                />
                <CustomButton
                    label={'Done'}
                    style={styles.doneButton}
                    labelStyle={styles.doneButtonTxt}
                />
            </View>
        </Overlay>
    )
}

export default SelectTraveler;

const styles = StyleSheet.create({
    container: {
        height: '70%',
        backgroundColor: COLORS.BLACK,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    innerContainer: {
        flexDirection: 'row',
        height: 55,
        backgroundColor: COLORS.BACKGROUND,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 15
    },
    label: {
        fontSize: FONTS.FONTSIZE.TEXT.LARGE - 1,
        color: COLORS.WHITE
    },
    doneButton: {
        height: 70,
        width: '92.5%',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 50
    },
    doneButtonTxt: {
        fontSize: FONTS.FONTSIZE.TEXT.LARGE,
        fontWeight: 'bold'
    }
})