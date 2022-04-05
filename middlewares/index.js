
module.exports = function (app) {
  const express = require('express');
  const path = require('path');
  const morgan = require('morgan');
  const { sequelize } = require('../db/models');

  app.use(morgan('dev'));
  const PORT = process.env.PORT ?? 3000;
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'hbs');
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });

};
