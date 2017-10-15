import { StyleSheet } from 'react-native';
import { 
    BORDER_RADIUS, 
    COLOR_APPLE_BLUE, 
    COLOR_OFF_WHITE,
    FONT_SIZE_1,
    FONT_SIZE_3,
    COLOR_GRAY_4,
    COLOR_GRAY_6
} from '../../config/styles';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLOR_OFF_WHITE,
        padding: 16,
        borderRadius: 2,
        shadowOpacity: 0.25,
        shadowRadius: 2,
        shadowOffset: { height: 0, width: 0 },
    },
    typeContainer: {
        flex: 1
    },
    type: {
        fontSize: FONT_SIZE_1,
        color: COLOR_GRAY_4,
    },
    titleContainer: {
        flex: 1
    },
    title: {
        fontSize: FONT_SIZE_3,
        color: COLOR_GRAY_6,
        fontWeight: '600'
    },
    metadataContainer: {
        flex: 1
    },
    metadata: {
        fontSize: FONT_SIZE_1,
        color: COLOR_GRAY_4,
    }
});