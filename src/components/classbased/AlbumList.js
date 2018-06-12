import React, { Component } from 'react';
import { 
    // Text,
    // StyleSheet,
    ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    constructor() {
        super();
        this.state = {
           albums: []
        };
        this.renderAlbums = this.renderAlbums.bind(this);
    }
    componentWillMount = () => {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => this.setState({ albums: res.data }));
        // at the end of episode 35
    }
// <AlbumDetail album={album} />
// <Text key={album.title}>{album.title}</Text>
    renderAlbums() {
        return this.state.albums.map((album) =>
        <AlbumDetail key={album.title} album={album} /> 
        );
    }
    
    render() {
        // const { textStyle } = styles;
        console.log(this.state.albums);
        
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

// const styles = StyleSheet.create({
//     textStyle: {
//         fontSize: 20
//     }
// });
