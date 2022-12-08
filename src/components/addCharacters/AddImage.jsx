import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Pressable, Text, Image, StyleSheet } from 'react-native'

const AddImage = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    let openImagePickerAsync = async () => {

        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if(!permissionResult.granted) {
            Alert.alert("Los permisos para acceder a la galería son necesarios")
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync()

        if(pickerResult.canceled) {
            return;
        }

        setSelectedImage({localUri: pickerResult.assets[0].uri})
    }

    return (
        <>
            <Pressable onPress={openImagePickerAsync}>
                <Text>Añadir Imagen</Text>
            </Pressable>
            <Image 
                source={{uri: selectedImage !== null ? selectedImage.localUri : null}}
                style={selectedImage != null ? styles.image : styles.imageHide}
                />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },
    imageHide: {
        width: 0,
        height: 0
    }
})

export default AddImage