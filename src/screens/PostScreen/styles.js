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
    bodyContainer: {
        marginBottom: 10
    },
    body: {
        lineHeight: FONT_SIZE_3,
        fontSize: FONT_SIZE_2
    },
    metadata: {
        fontSize: FONT_SIZE_1,
        color: COLOR_GRAY_4,
    },
    repliesContainer: {
        marginTop: 20,
    },
    replyContainer: {
        marginTop: 20
    },
    repliesBottomSpacer: {
        height: 100
    },
    replyBody: {
        marginBottom: 10
    }
});