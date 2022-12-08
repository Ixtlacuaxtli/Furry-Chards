import { Platform } from "react-native"

const alertError = (title, description) => {
    Platform.OS === 'web' ? window.confirm([title," "+description]) : Alert.alert(title + description)
}

const OnSubmitForm = values => { 
    console.log(values)
    alertError("Error X'D", "¡Todavía no hay bases de datos, Bruto!")
}

export default OnSubmitForm