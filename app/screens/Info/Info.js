import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Container, CustomHeader, CustomButton, IconButton } from '../../components/common';
import { Ionicons, MaterialCommunityIcons, FontAwesome5Icon, Fontisto } from '../../assets/icons';

import { Section } from '../../components';
import { SelectTraveler, Traveler } from './Travelers';
import { Date } from './Date';

import styles from './styles'
import { COLORS } from '../../assets/style';

const Info = () => {
    const [isTravelerModel, setTravelerModel] = useState(false);
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);

    return (
        <Container
            style={{ backgroundColor: 'black' }}
        >
            <CustomHeader />
            <View style={styles.sectionContainer}>
                <Section
                    label={"Flight"}
                    icon={
                        <Ionicons
                            name={'airplane'}
                            size={30}
                            color={COLORS.PRIMARY_COLOR} />
                    }
                />
                <Section
                    label={"Hotel"}
                    icon={
                        <FontAwesome5Icon
                            name={'building'}
                            size={30}
                            color={COLORS.PRIMARY_COLOR} />
                    }
                />
                <Section
                    label={"Tour"}
                    icon={
                        <MaterialCommunityIcons
                            name={'bag-carry-on'}
                            size={30}
                            color={COLORS.PRIMARY_COLOR} />
                    }
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    label={'ONE WAY'}
                    style={{ width: '30%' }}
                    labelStyle={styles.buttonTxt}
                />
                <CustomButton
                    label={'RETURN'}
                    style={{ width: '30%' }}
                    labelStyle={styles.buttonTxt}
                />
                <CustomButton
                    label={'MULTI WAY'}
                    style={{ width: '30%' }}
                    labelStyle={styles.buttonTxt}
                />
            </View>
            <View style={styles.srcDestView}>
                <TouchableOpacity style={styles.innerView} >
                    <Text style={styles.title}>NYC</Text>
                    <Text style={styles.subTitle}>
                        New York, United States
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.innerView} >
                    <Text style={styles.title}>Flying To</Text>
                    <Text style={styles.subTitle}>
                        Choose Destination
                    </Text>
                </TouchableOpacity>
                <IconButton
                    icon={<Fontisto name={'arrow-swap'} color={'white'} size={24} />}
                    style={styles.swapIcon}
                />
            </View>
            <Date />
            <Traveler setTravelerModel={setTravelerModel} />
            <CustomButton
                label={'Search Flights'}
                style={styles.searchButton}
                labelStyle={styles.searchButtonTxt}
            />
            {
                isTravelerModel &&
                <SelectTraveler
                    setTravelerModel={setTravelerModel}
                    adultCount={adultCount}
                    childrenCount={childrenCount}
                    infantCount={infantCount}
                    setAdultCount={setAdultCount}
                    setChildrenCount={setChildrenCount}
                    setInfantCount={setInfantCount}
                />
            }
        </Container>
    );
}

export default Info;