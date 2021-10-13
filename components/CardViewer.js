import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TarotCard from './TarotCard'

export default function CardViewer(props) {
  const {threeCardDrawResult, oneCardDrawResult, clicked} = props;

  return (
    <TarotCard threeCardDraw={threeCardDrawResult} oneCardDraw={oneCardDrawResult} clicked={clicked}/>
  );
}