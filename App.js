import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import CardViewer from './components/CardViewer'
import AppBar from './components/AppBar'

export default function App() {
  const [oneCard, setOneCard] = useState(true);
  const [threeCard, setThreeCard] = useState(true);
  const [threeCardDrawResult, setThreeCardDrawResult] = useState('');
  const [oneCardDrawResult, setOneCardDrawResult] = useState('');
  const [clicked, setClickedStatus] = useState(false);

  const pull1Card = () => {
   axios
   .get('http://127.0.0.1:3000/oneCard/')
   .then((response) => {
     setOneCardDrawResult(response.data)
     setClickedStatus(true)
   })
   .catch((error)=> {
     console.error(error);
   });
 }

 const pull3Cards = () => {
   axios
   .get('http://127.0.0.1:3000/threeCards/')
   .then((response) => {
     setThreeCardDrawResult(response.data)
     setClickedStatus(true)
   })
   .catch((error) => {
     console.error(error);
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
      <CardViewer threeCardDrawResult={threeCardDrawResult}
      oneCardDrawResult={oneCardDrawResult} clicked={clicked}/>
      <br/>
      <Button
        style={styles.button}
        onPress={() => {
          pull1Card();
        }}
        title={oneCard ? "pull a card!" : "Pulling your card!"}
      />
      <br/>
      <Button
        style={styles.button}
        onPress={() => {
          pull3Cards();
        }}
        title={threeCard ? "pull 3 cards!" : "Pulling your card!"}
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
