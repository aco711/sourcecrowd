import { StyleSheet } from 'react-native';
import { 
    BORDER_RADIUS, 
    COLOR_APPLE_BLUE, 
    FONT_SIZE_1,
    COLOR_GRAY_4
} from '../../config/styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#ffffff'
    },
    titleContainer: {
        marginBottom: 20
    },
    title: {
        color: COLOR_APPLE_BLUE,
        fontSize: FONT_SIZE_1
    }
});