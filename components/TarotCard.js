import React, {useState, useEffect} from 'react';
import { Text, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function TarotCard (props) {
  const {threeCardDraw, oneCardDraw, images} = props;
  console.log(props)

  return (
    oneCardDraw ?
    <Card elevation={3}>
      <Card.Title title={oneCardDraw[0].name} subtitle={oneCardDraw[0].type + ' arcana'} />
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content>
      <Paragraph>{oneCardDraw[0].meaning_up}</Paragraph>
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
     <Text>
     Select a draw type below
     </Text>

  );
}