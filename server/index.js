const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.listen(port, (err)=> {
  if (err) {
    console.err(err);
  }
  console.log(`server listening on port ${port}`);
});

const mongoose = require('mongoose');
const {
  get1RandomCard,
  get3RandomCards,
  getByArcana,
  getCardByName,
} = require('../database/index');

mongoose.Promise = global.Promise;

// test endpoint
app.get('/test/', (req, res) => {
  res.send('HELLO WORLD');
});

// get one random card ** WORKS **
app.get('/oneCard/', (req, res) => {
  console.log('***one card triggered!');
  const cardNum = Math.floor(Math.random() * 79);
  console.log('cardNum in server', cardNum);
  get1RandomCard(cardNum, (err, cardData) => {
    if (err) {
      res.status(404).send('Error getting card');
    } else {
      res.send(cardData);
    }
  });
});

// get three random cards ** WORKS **
app.get('/threeCards/', (req, res) => {
  const cardNum1 = Math.floor(Math.random() * 77);
  const cardNum2 = Math.floor(Math.random() * 77);
  const cardNum3 = Math.floor(Math.random() * 77);
  const cardNumArr = [cardNum1, cardNum2, cardNum3];
  get3RandomCards(cardNumArr, (err, cardData) => {
    if (err) {
      res.status(404).send('Error getting reviews');
    } else {
      res.send(cardData);
    }
  });
});

// get card by name ** WORKS **
app.get('/cards/:name/', (req, res) => {
  const cardName = req.params;
  getCardByName(cardName, (err, cardData) => {
    if (err) {
      res.status(404).send('Error getting reviews');
    } else {
      res.send(cardData);
    }
  });
});

// get card by arcana type
app.get('/cards/type/:arcana', (req, res) => {
  const arcanaName = req.params;
  console.log('arcana name in server:', arcanaName);
  getByArcana(arcanaName, (err, reviewData) => {
    if (err) {
      res.status(404).send('Error getting reviews');
    } else {
      res.send(reviewData);
    }
  });
});

// save draw review
app.post('/reviews/', (req, res) => {
  const postContent = req.body;
  postNewReview(postContent, (err, response) => {
    if (err) {
      console.log('err in post: ', err);
      res.status(500).send('Failed to post');
    } else {
      console.log('response from post: ', response);
      res.send(response);
    }
  });
});
