import { StyleSheet } from 'react-native';
import {
    COLOR_WHITE,
    COLOR_GRAY_4,
    FONT_SIZE_5,
    FONT_SIZE_1
} from '../../config/styles';

export default StyleSheet.create({
    container: {
        backgroundColor: COLOR_WHITE,
        flex: 1
    },
    postContainer: {
        padding: 20,
    },
    titleContainer: {
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontSize: FONT_SIZE_5,
    },
    metadata: {
        fontSize: FONT_SIZE_1,
        color: COLOR_GRAY_4,
    }
});