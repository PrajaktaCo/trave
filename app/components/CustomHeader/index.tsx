import * as React from 'react';
import { Text, View } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { COLORS } from 'Themes/style';
import styles from './styles'

const CustomHeader = ({
    title,
    rightComponent,
    leftComponent
}) => {
   const  getJustifyContent = () =>{
        if((title && rightComponent && leftComponent) || (rightComponent && leftComponent )) {
            return 'space-between';
        } else {
            return 'center'
        }
    }
    return (
        <View style={[styles.containerStyle,{justifyContent:getJustifyContent()}]}>
            {leftComponent}
            { title &&
            <View style={styles.headerContainer}>
                <Text style={styles.headerTxt}>{title} </Text>
                <SimpleLineIcons name="globe" color={COLORS.PRIMARY_COLOR} size={30} />
            </View>
            }
            {rightComponent}
        </View>
    );
}

export default CustomHeader;