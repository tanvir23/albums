// import library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/reuseable/header';
import AlbumList from './src/components/classbased/AlbumList';

// create component
const App = () => (
    <View>
        <Header headerText='Albums!' />
        <AlbumList />
    </View>
);
   
// render it to device
AppRegistry.registerComponent('albums', () => App);
