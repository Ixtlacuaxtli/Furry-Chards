import React from "react"
import { StyleSheet, Platform } from "react-native"
import theme from "../theme"
import ComponentsDimensionsConfig from "./ComponentsDimensionsConfig"

const ComponentsStyle = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: Platform.select({
            android: 'center',
            ios: 'center',
            default: 'flex-start'
        })
    },
    view: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
        margin: 15,
        backgroundColor: '#ddd',
        backgroundColor: '#ddd',
        borderRadius: 5,
        maxWidth: ComponentsDimensionsConfig.chards.maxWidth,
        ...theme.shadow
    },
    textId: {
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
        backgroundColor: '#ccc',
        borderRadius: 10,
        color: 'black'
    },
    fursonaName: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 8
    },
    fursonaData: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    viewImage: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        marginTop: 30,
        marginBottom: 15,
        width: 275,
        height: 275,
        borderRadius: 15,
        padding: 15,
        resizeMode: 'contain',
    }
})

export default ComponentsStyle