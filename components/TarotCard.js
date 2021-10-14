import React, {useState, useEffect} from 'react';
import { Text, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function TarotCard (props) {
  const {threeCardDraw, oneCardDraw, images} = props;
  console.log(props)
  console.log(oneCardDraw.img)

  return (
    oneCardDraw ?
    <Card elevation={3}>
      <Card.Title title={oneCardDraw.name} subtitle={oneCardDraw.arcana} />
      <Card.Cover source={{ uri: oneCardDraw.img }} />
      <Card.Content>
      <Text>This card represents:</Text>
      {oneCardDraw.meanings.light.map((string, index)=>{
        return <Paragraph key={index}>
          {'- '+ string+'.'}
        </Paragraph>
      })}
      </Card.Content>
      <Card.Content>
      <Text>Questions to ponder:</Text>
      {oneCardDraw['Questions to Ask'].map((string, index)=>{
        return <Paragraph key={index}>
          {'- '+ string}
        </Paragraph>
      })}
      </Card.Content>
    </Card>
    :
    threeCardDraw ?
    threeCardDraw.map((card) => {
      console.log('card', card)
     return
     <Card elevation={3}>
     <Card.Title title={card.name} subtitle={card.type} arcana />
     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
     <Card.Content>
     <Paragraph>{card.meaning_up}</Paragraph>
     </Card.Content>
    </Card>
    })
     :
     <Image
     source={{uri: "https://tinyimg.io/i/G2xxcMw.jpeg"}}
     style={{width: 200, height: 200}}
   />

  );
}