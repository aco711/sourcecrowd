import { StyleSheet } from 'react-native';
import { 
    BORDER_RADIUS, 
    COLOR_APPLE_GREEN, 
    FONT_SIZE_2,
    COLOR_GRAY_4
} from '../../config/styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    feedContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 2
    },
    feedItem: {
        flex: 1
    }
});