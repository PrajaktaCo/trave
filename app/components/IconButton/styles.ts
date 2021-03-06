import { StyleSheet } from 'react-native';
import { COLORS } from 'Themes/style';

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: COLORS.PRIMARY_COLOR, 
        height: 40, 
        width: 40, 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})

export default styles;