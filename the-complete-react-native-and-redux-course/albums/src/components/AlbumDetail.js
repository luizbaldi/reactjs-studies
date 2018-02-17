import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  return (
    <Card>
      <CardSection>
        <View style={style.thumbnailContainer}>
          <Image 
            source={{ uri: thumbnail_image }}
            style={style.thumbnail}
          />
        </View>
        <View style={style.header}>
          <Text style={style.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image 
          style={style.image}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button 
          label='Buy album'
          onPress={() => Linking.openURL(url)}
        />
      </CardSection>
    </Card>
  );
}

const style = {
  header: {
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 15
  },
  thumbnail: {
    height: 60,
    width: 60
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  image: {
    height: 300,
    flex: 1
  }
};

export default AlbumDetail;
