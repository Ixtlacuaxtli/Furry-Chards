import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChardReposList from './chardRepository/ChardReposList';
import AppBar from './appBar/AppBar';
import { Route, Routes } from 'react-router-native';
import TextStyle from './TextStyle';
import AddCharacters from './addCharacters/AddCharacters';

const Main = ()=>{
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route exact path='/' element={<ChardReposList />} />
                <Route path='/agregarPersonaje' element={<AddCharacters />} />
                <Route path='/acerca' element={<WorkingOn />} />
            </Routes>
        </View>
    )
}

const WorkingOn = () => {
    const StyleWorkingOn = StyleSheet.create({
        text:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }
    })

    return (
        <View style={StyleWorkingOn.text}>
            <TextStyle color='primary'>Próximamente UwU</TextStyle>
        </View>
    )
}

export default Main;