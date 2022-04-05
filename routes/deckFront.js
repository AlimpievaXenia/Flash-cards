const deckFront = require('express').Router();
const { Deck } = require('../db/models');

deckFront.get('/', async (req, res) => {
  const allDecks = await Deck.findAll({ raw: true });
  res.render('decks', { allDecks });
});

module.exports = deckFront;
