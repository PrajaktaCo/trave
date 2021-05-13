import { StyleSheet } from 'react-native';
import {COLORS} from 'Assets/style';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor:COLORS.PRIMARY_COLOR,
        width:'60%',
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    labelStyle: {
        color: 'white' 
    }
})

export default styles;