import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';  

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
      <View>
        {this.state.albums.length ?
          this.state.albums.map(album => (
            <Text key={album.url}>{album.title}</Text>
          ))
          : <Text>Loading albums...</Text>
        }
      </View>
    )
  }
}

export default AlbumList;