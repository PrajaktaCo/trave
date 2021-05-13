import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Dash from 'react-native-dash';
import { COLORS } from 'Themes/style';
import { Container, CustomCard, CustomHeader, Divider, Section } from 'Components';
import { Ionicons, EntypoIcon, AntDesignIcon, MaterialCommunityIcons, Fontisto } from 'Assets/icons';
import DATA from 'Constants/DATA.tsx';
import styles from './styles';

const FlightList = () => {
    return (
        <Container style={styles.container}>
            <CustomHeader
                leftComponent={
                    <View style={styles.headerLeft}>
                        <Text style={styles.headerTxt}>NewYork</Text>
                        <AntDesignIcon name={'arrowright'} color={COLORS.PRIMARY_COLOR} size={21} />
                        <Text style={styles.headerTxt}>London</Text>
                    </View>
                }
                rightComponent={
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name={'pencil'} size={24} color={COLORS.WHITE} />
                        <MaterialCommunityIcons name={'bell-ring'} size={24} color={COLORS.WHITE} />
                        <EntypoIcon name={'dots-three-vertical'} size={24} color={COLORS.WHITE} />
                    </View>
                }
            />
            <View style={styles.dateContainer}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.month}>
                                <Text style={styles.monthTxt}>{item.month}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.month}
                    horizontal
                />

                <FlatList
                    data={DATA}
                    renderItem={({ item }) => {
                        return (
                            <Section
                                style={styles.section}
                                icon={<Text style={styles.date}>{item.id}</Text>}
                            />
                        )
                    }}
                    keyExtractor={item => item.month}
                    horizontal
                />
            </View>
            <View style={styles.listContainer}>
                <Text style={styles.subHeaderTxt}>
                    Best Price
                </Text>
                <Divider />
                {DATA.map((i) => {
                    return (
                        <CustomCard >
                            <View style={styles.card}>
                                <Text style={styles.placeDate}>
                                    NYC{'\n'}
                                    <Text style={{ fontWeight: 'bold' }}>
                                        04.30
                                    </Text>
                                </Text>
                                <View style={styles.timeContainer}>
                                    <Text style={styles.timeTxt}>08 hrs 15 mins</Text>
                                    <View style={styles.line}>
                                        <Ionicons name={'airplane-sharp'} size={21} color={'darkgrey'} />
                                        <Dash style={{ width: '65%', height: 1 }} dashGap={5} dashColor={'darkgrey'} />
                                        <EntypoIcon name={'dot-single'} size={24} style={{ right: '35%' }} color={'darkgrey'} />
                                    </View>
                                    <Text style={styles.nonstopTxt}>Non-stop</Text>
                                </View>
                                <Text style={styles.placeDate}>
                                    LON {'\n'}
                                    <Text style={{ fontWeight: "bold" }}>
                                        07:15
                                    </Text>
                                </Text>
                            </View>

                            <View style={styles.dashedDivider}>
                                <View style={styles.leftSemiCircle} />
                                <Dash style={{ width: '95%', height: 1 }} dashGap={5} dashColor={'darkgrey'} />
                                <View style={styles.rightSemiCircle} />
                            </View>
                            <View style={styles.cardFooter}>
                                <View style={styles.leftFooter}>
                                    <Fontisto name={'adobe'} color={COLORS.PRIMARY_COLOR} size={28} />
                                    <Text style={styles.leftFooterTxt}>E6358{'\n'}<Text>EK523</Text></Text>
                                </View>
                                <Text style={styles.number}>175,56{'\n'}<Text style={styles.priceTxt}>Lowest price</Text></Text>
                            </View>
                        </CustomCard>
                    )
                })}
            </View>
        </Container>
    );
}

export default FlightList;