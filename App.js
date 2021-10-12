import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import CardViewer from './components/CardViewer'

export default function App() {
  const [oneCard, setOneCard] = useState(true);
  const [threeCard, setThreeCard] = useState(true);
  const [threeCardDrawResult, setThreeCardDrawResult] = useState('');
  const [oneCardDrawResult, setOneCardDrawResult] = useState('');
  const [clicked, setClickedStatus] = useState(false);


 const pull3Cards = () => {
   axios
   .get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3")
   .then((response) => {
     console.log(response.data)
     setThreeCardDrawResult(response.data.cards)
   })
   .catch((error) => {
     console.err(error);
   });
 }

 const pull1Card = () => {
  axios
  .get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1")
  .then((response) => {
    console.log(response.data)
    setOneCardDrawResult(response.data.cards)
  })
  .catch((error)=> {
    console.err(error);
  });
}



  return (
    <View style={[styles.container, {
      flexDirection: "column",
      padding: 10,
    }]}>
      <Image
        source={{uri: "https://tinyimg.io/i/G2xxcMw.jpeg"}}
        style={{width: 200, height: 200}}
      />
      <CardViewer threeCardDrawResult={threeCardDrawResult} />
      <Text>How many cards would you like to draw today?</Text>
      <Button
        style={styles.button}
        onPress={() => {
          setOneCard(false);
          setClickedStatus(true);
          pull1Card();
        }}
        disabled={!oneCard || !threeCard}
        title={oneCard ? "one card!" : "Pulling one card!"}
      />
            <Button
        onPress={() => {
          setThreeCard(false);
          setClickedStatus(true);
          pull3Cards();
        }}
        disabled={!oneCard || !threeCard}
        title={oneCard ? "3 cards!" : "Pulling three cards!"}
      />
    </View>
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
