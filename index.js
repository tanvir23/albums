// import library
import React from 'react';
import { AppRegistry, Text } from 'react-native';

// create component
const App = () => (
    <Text>
        Hello World
    </Text>
);
   
// render it to device
AppRegistry.registerComponent('albums', () => App);
