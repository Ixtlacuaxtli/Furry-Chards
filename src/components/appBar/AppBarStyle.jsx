import { StyleSheet } from "react-native"
import Constants from 'expo-constants';
import theme from '../../theme';

const AppBarStyle = StyleSheet.create({
    appBar:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingLeft: 10
    },
    text:{
        color: theme.appBar.secondary,
        fontWeight: theme.fontWeights.bold
    },
    link: {
        paddingHorizontal: 15,
    },
    scroll: {
        paddingBottom: 15
    },
    active: {
        color: theme.appBar.textPrimary
    }
})

export default AppBarStyle