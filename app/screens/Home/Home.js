import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Card, Header } from '../../components';
import styles from './styles'

const Home = () => {
    return (
        <View style={styles.containerStyle}>
            <Header
                title={'Travel'}
            />
            <ImageBackground
                source={require('../../assets/images/travel_background.jpeg')}
                style={styles.backgroundImg}
            >
            </ImageBackground>
        </View>
    );
}

export default Home;