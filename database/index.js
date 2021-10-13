const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://bekah123:bekah123@mothmysticapi.q0tjb.mongodb.net/mvp?retryWrites=true&w=majority')
    .then(() => {
      console.log('MongoDB connection successful!');
    })
    .catch((err) => {
      console.error('Database connection error');
    });

// With Mongoose, everything is derived from a Schema
const tarotCard = new Schema({
  'cardId': Number,
  'name': String,
  'number': Number,
  'arcana': String,
  'suit': String,
  'img': String,
  'fortune_telling': Array,
  'keywords': Array,
  'meanings': Object,
  'Archetype': String,
  'Hebrew Alphabet': String,
  'Numerology': String,
  'Elemental': String,
  'Mythical/Spiritual': String,
  'Questions to Ask': Array,
}, {collection: 'tarotcards'});

// The next step is compiling our schema into a Model
const Cards = mongoose.model('tarotcards', tarotCard);

// **** DB QUERIES *****

// get random card ** WORKS **
const get1RandomCard = (cardNumber, callback) => {
  Cards.findOne({cardId: cardNumber}, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

// get 3 cards ** WORKS **
const get3RandomCards = (cardIdArr, callback) => {
  Cards.find({cardId: {$in: [cardIdArr]}}, (err, data) => {
    if (err) {
      console.log(`error getting data for ${productId} from db!`);
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

// get card by card name ** WORKS **
const getCardByName = (cardName, callback) => {
  Cards.find(cardName, (err, data) => {
    if (err) {
      console.log(`error getting data for ${cardName} from db!`);
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

// get card by aracana type
const getByArcana = (arcanaName, callback) => {
  Cards.find(arcanaName, (err, cardData) => {
    if (err) {
      console.log(`error getting ${arcanaName} cards from db!`);
      callback(err);
    } else {
      callback(null, cardData);
    }
  });
};


module.exports = {get1RandomCard, get3RandomCards, getByArcana, getCardByName};


