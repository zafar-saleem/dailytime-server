'use strict';

const passport = require('passport');
const express = require('express');
const newService = require('../../services/admin/new');

let router = express.Router();

router.post('/new', passport.authenticate('jwt', { session: false }), newService.new);

module.exports = router;
