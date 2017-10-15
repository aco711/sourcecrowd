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
    titleContainer: {
        marginBottom: 10
    },
    title: {
        color: COLOR_GRAY_4,
        fontSize: FONT_SIZE_2,
        fontWeight: '600'
    },
    newPosts: {
        color: COLOR_APPLE_GREEN
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