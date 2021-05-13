import * as React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { Container, CustomHeader, CustomButton, CustomCard, Section } from 'Components';
import { Ionicons, MaterialCommunityIcons, FontAwesome5Icon, EvilIcons } from 'Assets/icons';
import { COLORS } from 'Assets/style';
import styles from './styles';

const Home = () => {
    return (
        <Container>
            <CustomHeader
                title={'Travel'}
            />
            <ImageBackground
                source={require('../../assets/images/travel_background.jpeg')}
                style={styles.backgroundImg}
            >
                <CustomCard style={styles.cardContainer}>
                    <Text style={styles.cardHeader}>Products and Services</Text>
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
                </CustomCard>
                <CustomCard style={styles.cardContainerII}>
                    <View>
                        <EvilIcons
                            name={'close'}
                            size={30}
                            color={COLORS.WHITE}
                            style={styles.closeIcon}
                        />
                        <MaterialCommunityIcons
                            name={'podium'}
                            size={150}
                            color={COLORS.WHITE}
                        />
                    </View>
                    <View style={styles.txtContainer}>
                        <Text style={styles.medTxt}>
                            Shop as an OSTO member
                            </Text>
                        <Text style={styles.smallTxt}>
                            You could save even more on thousands
                            </Text>
                        <CustomButton
                            label={'Sign in'}
                            style={{ marginVertical: 30 }}
                        />
                    </View>
                </CustomCard>
                <CustomCard>
                    <Image
                        source={require('../../assets/images/travel3.jpeg')}
                        style={styles.cardImg}
                    />
                </CustomCard>
                <CustomCard>
                    <Image
                        source={require('../../assets/images/travel1.jpeg')}
                        style={styles.cardImg}
                    />
                </CustomCard>
                <CustomCard>
                    <Image
                        source={require('../../assets/images/travel2.jpeg')}
                        style={styles.cardImg}
                    />
                </CustomCard>
            </ImageBackground>
        </Container>
    );
}

export default Home;