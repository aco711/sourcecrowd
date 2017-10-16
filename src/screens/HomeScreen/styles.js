import { StyleSheet } from 'react-native';
import { 
    BORDER_RADIUS, 
    COLOR_APPLE_BLUE, 
    FONT_SIZE_1,
    FONT_SIZE_2,
    COLOR_GRAY_4,
    COLOR_WHITE,
    COLOR_APPLE_GREEN
} from '../../config/styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: COLOR_WHITE
    },
    titleContainer: {
        marginBottom: 20
    },
    title: {
        color: COLOR_APPLE_BLUE,
        fontSize: FONT_SIZE_1
    },
    feedTitleContainer: {
        marginBottom: 10
    },
    feedTitleHighlight: {

    },
    feedTitle: {
        color: COLOR_GRAY_4,
        fontSize: FONT_SIZE_2,
        fontWeight: '600'
    },
    newPosts: {
        color: COLOR_APPLE_GREEN
    },
});