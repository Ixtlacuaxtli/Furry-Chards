import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const StyledTextInput = ({ style = {}, ...props }) => {
    const inputStyle = {
        ...styles.textInput,
        ...style
    }

    return <TextInput style={inputStyle} {...props} />
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        padding: 4,
        marginBottom: 15,
        borderRadius: 4,
    }
})

export default StyledTextInput