import React, {useState, useEffect} from 'react';
import { Text, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function OneCard ({oneCardDraw}) {
  return (
    <>
    <Image
     source={{uri: oneCardDraw.img}}
     style={{width: 300, height: 520}}
     />
     <br/>
    <Card elevation={3}>
      <Card.Title title={oneCardDraw.name + ' ✨'} subtitle={oneCardDraw.arcana} />
      <Card.Content>
      <Text>⭐  This card represents:</Text>
      {oneCardDraw.meanings.light.map((string, index)=>{
        return <Paragraph key={index}>
          {'- '+ string+'.'}
        </Paragraph>
      })}
      </Card.Content>
      <Card.Content>
      <Text>🔮  All cards have a shadow side:</Text>
      {oneCardDraw.meanings.shadow.map((string, index)=>{
        return <Paragraph key={index}>
          {'- '+ string+'.'}
        </Paragraph>
      })}
      </Card.Content>
      <Card.Content>
      <Text>🤔  Questions to ponder:</Text>
      {oneCardDraw['Questions to Ask'].map((string, index)=>{
        return <Paragraph key={index}>
          {'- '+ string}
        </Paragraph>
      })}
      </Card.Content>
    </Card>
    </>
  );
}