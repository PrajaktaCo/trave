import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Card } from '../../components';
import { Container, CustomHeader } from '../../components/common';
import styles from './styles'

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
            </ImageBackground>
        </Container>
    );
}

export default Home;