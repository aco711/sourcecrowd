import { StyleSheet } from 'react-native';
import {
    COLOR_WHITE,
    FONT_SIZE_5,
    FONT_SIZE_3
} from '../../config/styles';

export default StyleSheet.create({
    container: {
        paddingTop: 40,
        padding: 20,
        backgroundColor: COLOR_WHITE,
        flex: 1
    },
    titleInput: {
        fontSize: FONT_SIZE_5
    },
    titleInputContainer: {
        marginBottom: 20,
    },
    descriptionInput: {
        fontSize: FONT_SIZE_3,
        lineHeight: 2
    }
});