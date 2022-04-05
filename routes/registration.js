const regRouter = require('express').Router();
const db = require('../db/models');

const { User } = db;

regRouter.get('/', (req, res) => {
  res.render('reg-form');
});

regRouter.post('/', async (req, res) => {
  const { firstName, lastName, login, password } = req.body;
  try {
    await User.create({
      firstName,
      lastName,
      login,
      password,
    });
  } catch (error) {
    console.error(error);
  }

  res.redirect('/auth');

});

module.exports = regRouter;
