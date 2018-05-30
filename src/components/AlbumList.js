import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
// axios is a library that will be used for http requests

// class functions must render
// have a life cycle method

// this is a class component = dynamic 
class AlbumList extends Component {
    state = { albums: [] };
    // automatically called with this specfic name
    componentWillMount() {
        // debugger put anywhere will stop the program and you can 
        // see all variables at that point
        // debugger;
        // this.setState is the only way to update the state of an object
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }
    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />
        );
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;