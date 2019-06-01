'use strict';

const express = require('express');
const User = require('../../models/User');

const httpResponses = {
  onValidationError: {
    success: false,
    message: 'Please enter username and password.'
  },
  onUserSaveError: {
    success: false,
    message: 'That username address already exists.'
  },
  onUserSaveSuccess: {
    success: true,
    message: 'Successfully created new user.'
  }
}

// Register new users
function registerUser(request, response) {
  let { username, password } = request.body;

  if (!username || !password) {
    response.json(httpResponses.onValidationError);
  } else {
    let newUser = new User({
      username: username,
      password: password
    });

    // Attempt to save the user
    newUser.save(error => {
      if (error) {
        return response.json(httpResponses.onUserSaveError);
      }
      response.json(httpResponses.onUserSaveSuccess);
    });
  }
}

module.exports = {
  registerUser: registerUser
};
