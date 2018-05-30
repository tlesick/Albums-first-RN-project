//import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a component

// below is a functional component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'}/>
        <AlbumList />
    </View>
    );

//render the component 
// register atleast one component to the native application
// reason why albums is used
AppRegistry.registerComponent('albums', () => App);