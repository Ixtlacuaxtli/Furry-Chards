import React from "react";
import { TouchableWithoutFeedback, View, ScrollView } from 'react-native';
import TextStyle from "../TextStyle";
import { Link, useLocation } from 'react-router-native';
import AppBarStyle from "./AppBarStyle";

const AppBarTab = ({children, to}) => {
    const active = useLocation().pathname === to

    const textStyles = [
        AppBarStyle.text,
        active && AppBarStyle.active
    ]

    return (
        <Link to={to} style={AppBarStyle.link} component={TouchableWithoutFeedback}>
            <TextStyle style={textStyles} bold='bold'>{children}</TextStyle>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={AppBarStyle.appBar}>
            <ScrollView horizontal style={AppBarStyle.scroll}>
                <AppBarTab to='/'>Repositorios</AppBarTab>
                <AppBarTab to='/agregarPersonaje'>Agregar personaje</AppBarTab>
                <AppBarTab to='/acerca'>Acerca</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar;