import { Platform } from "react-native"

const theme = {
    appBar: {
        primary: Platform.select({
            android: '#357',
            ios: '#357',
            default: '#587'
        }),
        secondary: '#aaa',
        textPrimary: '#fff'
    },
    colors: {
        textPrimary: '#000',
        textSecondary: Platform.select({
            android: '#26a',
            ios: '#26a',
            default: '#286'
        }),
        primary: '444'
    },
    fontSizes: {
        nombreId: 11,
        datos: 15
    },
    fontWeights: {
        normal: '400',
        bold: '900' 
    },
    shadow: {
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    }
}

export default theme