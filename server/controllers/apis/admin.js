'use strict';

const passport = require('passport');
const express = require('express');
const newService = require('../../services/admin/new');
const listService = require('../../services/admin/list');

let router = express.Router();

router.post('/new', passport.authenticate('jwt', { session: false }), newService.new);
router.get('/list', passport.authenticate('jwt', { session: false }), listService.fetch);

module.exports = router;
