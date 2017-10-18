import { StyleSheet } from 'react-native';
import {
    COLOR_WHITE,
    FONT_SIZE_4,
    FONT_SIZE_3
} from '../../config/styles';

export default StyleSheet.create({
    container: {
        backgroundColor: COLOR_WHITE,
        flex: 1
    },
    formContainer: {
        paddingTop: 40,
        padding: 20,
    },
    postTitleContainer: {
        marginBottom: 20,
    },
    postTitle: {
        fontSize: FONT_SIZE_4
    },
    bodyInput: {
        fontSize: FONT_SIZE_3,
        lineHeight: 2
    }
});