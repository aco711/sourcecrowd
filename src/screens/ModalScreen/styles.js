import { StyleSheet } from 'react-native';
import {
    COLOR_WHITE,
    COLOR_GRAY_4,
    FONT_SIZE_1,
    FONT_SIZE_2,
    FONT_SIZE_3,
    FONT_SIZE_5,
} from '../../config/styles';

export default StyleSheet.create({
    container: {
        backgroundColor: COLOR_WHITE,
        flex: 1
    },
    textContainer: {
        padding: 20
    },
    text: {
        fontSize: FONT_SIZE_3
    }
});