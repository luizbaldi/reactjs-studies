import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';  
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(({ data }) => {
        this.setState({ albums: data });
      })
      .catch(err => {
        console.log(err);
      }) 
  }

  render() {
    return (
      <ScrollView>
        {this.state.albums.length ?
          this.state.albums.map(album => (
            <AlbumDetail 
              key={album.title}
              album={album}
            />
          ))
          : <Text>Loading albums...</Text>
        }
      </ScrollView>
    )
  }
}

export default AlbumList;