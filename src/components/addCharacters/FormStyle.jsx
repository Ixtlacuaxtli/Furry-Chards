import ComponentsStyle from '../ComponentsStyle'
import { StyleSheet } from 'react-native-web'
import theme from '../../theme'
import ComponentsDimensionsConfig from '../ComponentsDimensionsConfig'

const FormStyle = StyleSheet.create({
    container: {
        alignSelf: 'center',
        ...ComponentsStyle.view,
        maxHeight: ComponentsDimensionsConfig.form.maxHeight,
        minWidth: ComponentsDimensionsConfig.form.minWidth,
        maxWidth: ComponentsDimensionsConfig.form.maxWidth
    },
    buttonSend: {
        marginVertical: 15,
        alignItems: 'center',
        padding: 4,
        marginBottom: 30,
        borderRadius: 4,
        ...theme.shadow,
        backgroundColor: theme.appBar.primary,
    },
    viewMore: {
        paddingTop: 8,
        alignSelf: "flex-end"
    },
    buttonText: {
        color: theme.appBar.textPrimary,
        bold: theme.fontWeights.bold
    }
})

export default FormStyle