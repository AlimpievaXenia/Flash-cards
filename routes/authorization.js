const authRouter = require('express').Router();
const { User } = require('../db/models');

authRouter.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    const userWithReg = await User.findOne({ where: { login, password } });

    if (userWithReg) {
      // res.locals.user = userWithReg;
      res.redirect('/');
    }
  } catch (e) {
    console.log('Error:', e);
  }
});

module.exports = authRouter;
