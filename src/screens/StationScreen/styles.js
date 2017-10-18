import { StyleSheet } from 'react-native';
import {
    COLOR_WHITE,
    COLOR_GRAY_4,
    FONT_SIZE_2
} from '../../config/styles';

export default StyleSheet.create({
    container: {
        backgroundColor: COLOR_WHITE,
        flex: 1
    },
    scrollViewContainer: {
        padding: 20
    },
    feedContainer: {
        marginBottom: 40
    },
    feedTitle: {
        color: COLOR_GRAY_4,
        fontSize: FONT_SIZE_2,
        fontWeight: '600',
        marginBottom: 10
    },
    repliesBottomSpacer: {
        height: 100
    },
});