import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  return (
    <Card>
      <CardSection>
        <View>
          <Image 
            source={{ uri: thumbnail_image }}
            style={style.thumbnail}
          />
        </View>
        <View style={style.header}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
}

const style = {
  header: {
    justifyContent: 'space-around'
  },
  thumbnail: {
    height: 60,
    width: 60
  }
}

export default AlbumDetail;
