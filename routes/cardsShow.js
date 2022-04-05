const cardsShow = require('express').Router();
const { Deck, Card } = require('../db/models');

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[k]] = [cards[k], cards[i]];
  }
  return cards;
}

cardsShow.get('/:id', async (req, res) => {
  const { id } = req.params;
  const cards = await Deck.findAll({
    raw: true,
    where: {
      id,
    },
    include: [
      {
        model: Card,
        attrributes: ['question'],
      },
    ],
  });
  const shufflecards = shuffle(cards);
  console.log(shufflecards);
  res.render('cards', { shufflecards });
});

module.exports = cardsShow;
