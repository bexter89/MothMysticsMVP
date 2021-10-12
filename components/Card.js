import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Card (props) {
  const {threeCardDrawResult, oneCardDrawResult, clicked} = props;

  useEffect(() => {

  }, [clicked]);

  return (
    clicked ? 'i am a card!': 'select cards to draw below:'
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});
