import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import ComponentsStyle from '../ComponentsStyle';
import TextStyle from '../TextStyle';
import axios from 'axios';
import repositories from '../../data/repositories';

const RepositoryNames = repo => {
    return (
        <View>
            <View>
                <TextStyle style={ComponentsStyle.textId}>Id: {repo.id}</TextStyle>
            </View>
            <View style={ComponentsStyle.fursonaName}>
                <TextStyle text>Nombre de la Fursona: </TextStyle>
                <View>
                    <TextStyle color='secondary' bold='bold'>{repo.nombre}</TextStyle>
                </View>
            </View>
            <View style={ComponentsStyle.fursonaName}>
                <TextStyle text>Apellidos de la Fursona: </TextStyle>
                <View>
                    <TextStyle color='secondary' bold='bold'>{repo.apellido}</TextStyle>
                </View>
            </View>
            <RepositoryData {...repo}/>
        </View>
    )
}

const RepositoryData = repo => {
    return (
        <View>
            <View style={ComponentsStyle.fursonaData}>
                <TextStyle text>Especie: 
                    <TextStyle color='secondary' bold='bold'>{repo.especie}</TextStyle>
                </TextStyle>
                <TextStyle text>Edad: 
                    <TextStyle color='secondary' bold='bold'>{repo.edad}</TextStyle>
                </TextStyle>
            </View>
            <View style={ComponentsStyle.viewImage}>
                <AddImage {...repo}/>
            </View>
        </View>
    )
}

const AddImage = repo => {
    if (repo.imagen == 'tlacuache.jpg') {
        return (
            <Image style={ComponentsStyle.image} source={require('../../pictures/tlacuache.jpg')}/>
        )
    } else if (repo.imagen == 'oso.jpg') {
        return (
            <Image style={ComponentsStyle.image} source={require('../../pictures/oso.jpg')}/>
        )
    } else {
        return (
            <Image style={ComponentsStyle.image} source={require('../../pictures/lobo.png')}/>
        )
    }
    
}

const ChardReposList = ()=>{
    /*const [listaCartas, setListaCartas] = useState([])

    useEffect(() => {
        getCartas()
    }, [])

    const getCartas = async () => {
        const respuesta = await axios.get("http://127.0.0.1:3000/echoJSON.php")
        setListaCartas(respuesta.data)
    }*/

    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={()=> <Text></Text>}
            renderItem={({ item: repo }) =>(
                <View key={repo.id} style={ComponentsStyle.view}>
                    <RepositoryNames {...repo}/>
                </View>
            )}
            contentContainerStyle={ComponentsStyle.container}>
        </FlatList>
    )
}

export default ChardReposList;