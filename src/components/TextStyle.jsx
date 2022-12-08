import React from "react";
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const textStyle = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.datos,
        fontWeight: theme.fontWeights.normal
    },
    nombreId: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.nombreId,
        fontWeight: theme.fontWeights.bold
    },
    respuesta: {
        color: theme.colors.textSecondary,
        fontSize: theme.fontSizes.datos,
        fontWeight: theme.fontWeights.normal
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    primaryColor: {
        color: theme.colors.primary
    },
    secondaryColor: {
        color: theme.colors.textSecondary
    }
})

export default function ({bold, color, children,
style, ...restOfProps}) {
    const TextStyles = [
        textStyle.text,
        textStyle.nombreId,
        textStyle.respuesta,
        //Esto nos pone el estilo Blue si existen, pero que se pasan por parámetro
        bold === 'bold' && textStyle.bold,
        color === 'primary' && textStyle.primaryColor,
        color === 'secondary' && textStyle.secondaryColor,
        style
    ]

    return (
        <Text style={TextStyles} {...restOfProps}>
            {children}
        </Text>
    )
}