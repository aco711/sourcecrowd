import { StyleSheet } from 'react-native';
import { 
    BORDER_RADIUS, 
    COLOR_APPLE_BLUE, 
    FONT_SIZE_1,
    COLOR_GRAY_1
} from '../../config/styles';

export default StyleSheet.create({
    container: {
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLOR_GRAY_1
    },
    splitContainer: {
        flex: 1,
        padding: 12,
    },
    split: {

    },
    splitText: {
        color: COLOR_APPLE_BLUE,
        fontSize: FONT_SIZE_1,
        textAlign: 'center'
    }
});