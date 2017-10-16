import { StyleSheet } from 'react-native';
import { 
    BORDER_RADIUS, 
    COLOR_APPLE_BLUE, 
    FONT_SIZE_2,
    COLOR_OFF_WHITE
} from '../../config/styles';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: 300,
        alignSelf: 'center',
        borderTopLeftRadius: BORDER_RADIUS,
        borderTopRightRadius: BORDER_RADIUS,
        backgroundColor: COLOR_APPLE_BLUE
    },
    textContainer: {
        alignSelf: 'center',
    },
    text: {
        color: COLOR_OFF_WHITE,
        paddingTop: 20
    }
});