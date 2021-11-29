import React from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TarotDisplay from './TarotDisplay'

export default function CardViewer({threeCardDrawResult, oneCardDrawResult, clicked}) {

  return (
    clicked ?
    <TarotDisplay threeCardData={threeCardDrawResult} oneCardData={oneCardDrawResult}/>
    :
    <Image
    source={{uri: "http://visualtarot.com/decks/original-rider-waite-tarot/back-images/original-rider-waite-tarot-back-image-of-cards-01.jpg"}}
    style={{width: 300, height: 500}}
    />
  )
}