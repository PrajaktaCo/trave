import * as React from 'react';
import { View, StyleSheet} from 'react-native';

import { COLORS } from '../assets/style';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
           {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 15,
        elevation:10,
        borderWidth:1,
        borderColor:'#000',
        backgroundColor:COLORS.WHITE,
        margin:10,
        padding:5
      }
})
export default Card;