import React, { useState } from 'react'
import { View, Pressable, Text} from 'react-native'
import { NativeBaseProvider, FormControl, Stack, ScrollView,} from 'native-base'
import { useFormik } from 'formik'
import FormStyle from './FormStyle'
import StyledTextInput from './StyledTextInput'
import InitialValues from './InitialValues'
import ListOfInputs from './ListOfInputs'
import ComponentsDimensionsConfig from '../ComponentsDimensionsConfig'
import AddImage from './AddImage'
import ValidateForm from './ValidateForm'
import OnSubmitForm from './OnSubmitForm'

const AddCharacters = () => {
    const { values, isSubmitting, setFieldValue } = useFormik({
        initialValues: InitialValues,
        validate: ValidateForm,
        onSubmit: OnSubmitForm
    })

    const getListOfComponents = arrayNamesToUse => {
        let listOfInputs = []

        for(let nInput in arrayNamesToUse) {
            const InputValue = arrayNamesToUse[nInput][0]
            const InputPlaceholder = arrayNamesToUse[nInput][1]
    
            listOfInputs[nInput] = (
                <Stack key={InputValue}>
                    <FormControl.Label>{InputPlaceholder}</FormControl.Label>
                    <StyledTextInput
                        value={values[InputValue]}
                        onChangeText={text => setFieldValue(InputValue, text)}
                        />
                </Stack>
            )
        }

        return listOfInputs
    }

    const [shouldShow, setShouldShow] = useState(false)

    return (
        <NativeBaseProvider>
            <View style={FormStyle.container}>
                <FormControl>
                    <ScrollView h={shouldShow ? ComponentsDimensionsConfig.form.maxHeight : ComponentsDimensionsConfig.form.minHeight}>
                            
                        { getListOfComponents(ListOfInputs.listOfRequiredInputs) }

                        <Pressable style={FormStyle.viewMore} onPress={()=> setShouldShow(!shouldShow)}>
                            {shouldShow ? (
                                <Text>Ver menos</Text>
                            ):(
                                <Text>Ver más</Text>
                            )}
                        </Pressable>

                        { shouldShow ? getListOfComponents(ListOfInputs.listOfOptionalInputs) : null}

                        <AddImage />

                        <Pressable style={FormStyle.buttonSend} onPress={OnSubmitForm}>
                            <Text style={FormStyle.buttonText}>Agregar Personaje</Text>
                        </Pressable>
                    </ScrollView>
                </FormControl>
            </View>
        </NativeBaseProvider>
    )
}

export default AddCharacters