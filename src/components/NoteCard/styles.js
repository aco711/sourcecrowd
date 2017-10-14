import { StyleSheet } from 'react-native';
import { 
    BORDER_RADIUS, 
    COLOR_APPLE_BLUE, 
    FONT_SIZE_4,
    COLOR_GRAY_4
} from '../../config/styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titleContainer: {
        flex: 1
    },
    title: {
        fontSize: FONT_SIZE_4,
        color: COLOR_GRAY_4
    },
    metadataContainer: {
        flex: 1
    }
});