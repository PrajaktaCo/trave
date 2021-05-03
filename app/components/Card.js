import * as React from 'react';
import { View, StyleSheet} from 'react-native';

import { COLORS } from '../assets/style';
import {CustomCard} from './common';

const Card = ({children, style}) => {
    return (
        <CustomCard style={style}>
            {children}
        </CustomCard>
    );
}
export default Card;