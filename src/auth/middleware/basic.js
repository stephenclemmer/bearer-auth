'use strict';

const base64 = require('base-64');
const { users } = require('../models/index.js');

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) {
    next('Invalid login');
    // return Error();
  }


  try {
    let basic = req.headers.authorization;
    let [username, password] = base64.decode(basic).split(':');

    req.user = await users.authenticateBasic(username, password);
    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }

};

