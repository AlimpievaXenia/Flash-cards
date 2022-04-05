const router = require('express').Router();

const { Deck } = require('../db/models');

router.get('/', async (req, res) => {
  const tasks = await Deck.findAll({ raw: true });
  res.render('index');
});


module.exports = router;
