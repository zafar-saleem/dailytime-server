'use strict';

const passport = require('passport');
const express = require('express');
const hoursService = require('../../services/employees/hours');

let router = express.Router();

router.post('/hours', passport.authenticate('jwt', { session: false }), hoursService.fileHours);

module.exports = router;
