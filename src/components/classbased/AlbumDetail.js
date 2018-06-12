import React from 'react';
import { Text } from 'react-native';
import Card from '../reuseable/Card';
import CardSection from '../reuseable/CardSection';

const AlbumDetail = (props) => {
    console.log('albumdetails');
    
    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </Card>
      );  
 };
 export default AlbumDetail;
