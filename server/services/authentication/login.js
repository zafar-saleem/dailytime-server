'use strict';

const express = require('express');
const apiRoutes = express.Router();

const jwt = require('jsonwebtoken');
const passport = require('passport');
const db = require('../../../configs/db');

const User = require('../../models/User');

const httpResponse = require('./');

function loginUser(request, response) { 
  let { username, password } = request.body;

  User.findOne({
    username: username
  }, function(error, user) {
    if (error) throw error;

    if (!user) {
      return response.send(httpResponse.onUserNotFound);
    }

    // Check if password matches
    user.comparePassword(password, function(error, isMatch) {
      if (isMatch && !error) {
        var token = jwt.sign(user.toJSON(), db.secret, {
          expiresIn: 10080
        });

        return response.json({
          success: true,
          token: 'JWT ' + token,
          role: user.role,
          name: user.name,
          id: user._id
        });
      }

      response.send(httpResponse.onAuthenticationFail);
    });
  });
};

module.exports = {
  loginUser: loginUser
};
