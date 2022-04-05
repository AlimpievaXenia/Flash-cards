const express = require('express');
const useMiddleware = require('./middlewares');
const regRouter = require('./routes/registration');
const authRouter = require('./routes/authorization');

const cardsShow = require('./routes/cardsShow');
const deckFront = require('./routes/deckFront');

const app = express();
useMiddleware(app);

app.get('/', (req, res) => {
  res.render('index');
});
app.use('/reg', regRouter);
app.use('/auth', authRouter);

app.get('/reg', (req, res) => {
  res.render('reg-form');
});

app.get('/auth', (req, res) => {
  res.render('auth-form');
});


app.use('/decks', deckFront);
app.use('/cards', cardsShow);

// app.locals.user = null;
