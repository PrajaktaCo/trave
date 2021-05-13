import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { MaterialCommunityIcons } from 'Assets/icons';
import { FONTS, COLORS } from 'Assets/style';
import { Divider, Overlay, CustomButton } from 'Components';
import  SubHeader  from '../SubHeader';


const SelectDate = ({
    setDateModel
}) => {
    return (
        <Overlay>
            <View style={styles.container}>
                <SubHeader
                    label={'Select dates'}
                    icon={
                        <MaterialCommunityIcons
                            name={'close-box-outline'}
                            size={31}
                            color={COLORS.DISABLE}
                            onPress={() => setDateModel(false)}
                        />
                    }
                />
                <Divider />

                <Calendar
                    markingType={'period'}
                    hideExtraDays={true}
                    markedDates={{
                        '2021-05-23': { startingDay: true, color: COLORS.PRIMARY_COLOR, textColor: 'white' },
                        '2021-05-24': { color: '#ffaa66', textColor: 'white' },
                        '2021-05-25': { color: '#ffaa66', textColor: 'white' },
                        '2021-05-26': { color: '#ffaa66', textColor: 'white' },
                        '2021-05-27': { endingDay: true, color: COLORS.PRIMARY_COLOR, textColor: 'white' },
                    }}
                    theme={{
                        calendarBackground: COLORS.BLACK,
                        textSectionTitleColor: COLORS.PRIMARY_COLOR,
                        textSectionTitleDisabledColor: COLORS.DISABLE,
                        dayTextColor: COLORS.WHITE,
                        todayTextColor: COLORS.WHITE,
                        selectedDayTextColor: COLORS.WHITE,
                        monthTextColor: COLORS.WHITE,
                        indicatorColor: COLORS.WHITE,
                        arrowColor: COLORS.WHITE,
                        'stylesheet.calendar.header': {
                            week: {
                                marginTop: 30,
                                marginHorizontal: 12,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                fontSize: 24
                            }
                        }
                    }}
                    style={{
                        marginLeft: 10,
                        marginRight: 10
                    }}
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

export default SelectDate;

const styles = StyleSheet.create({
    container: {
        height: '73%',
        backgroundColor: COLORS.BLACK,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    doneButton: {
        height: 70,
        width: '92.5%',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    doneButtonTxt: {
        fontSize: FONTS.FONTSIZE.TEXT.LARGE,
        fontWeight: 'bold'
    }
})