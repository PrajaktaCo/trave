import * as React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { Container, CustomHeader, CustomButton, CustomCard, Section } from 'Components';
import { Ionicons, MaterialCommunityIcons, FontAwesome5Icon, EvilIcons } from 'Assets/icons';
import { COLORS } from 'Themes/style';
import styles from './styles';
import images from '../../themes/images';

const Home = () => {
    return (
        <Container>
            {console.log('---->yghg')}
            <CustomHeader
                title={'Travel'}
            />
            <ImageBackground
                source={images.BACKGROUND_IMG}
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
                        source={images.TRAVEL_1}
                        style={styles.cardImg}
                    />
                </CustomCard>
                <CustomCard>
                    <Image
                        source={images.TRAVEL_2}
                        style={styles.cardImg}
                    />
                </CustomCard>
                <CustomCard>
                    <Image
                        source={images.TRAVEL_3}
                        style={styles.cardImg}
                    />
                </CustomCard>
            </ImageBackground>
        </Container>
    );
}

export default Home;