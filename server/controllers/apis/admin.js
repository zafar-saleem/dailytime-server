'use strict';

const passport = require('passport');
const express = require('express');
const newService = require('../../services/admin/new');
const listService = require('../../services/admin/list');
const profileService = require('../../services/admin/profile');
const detailService = require('../../services/admin/details');

let router = express.Router();

router.post('/new', passport.authenticate('jwt', { session: false }), newService.new);
router.get('/list', passport.authenticate('jwt', { session: false }), listService.fetch);
router.get('/profile', passport.authenticate('jwt', { session: false }), profileService.fetch);
router.get('/employee/details', passport.authenticate('jwt', { session: false }), detailService.fetch);
router.put('/employee/update', passport.authenticate('jwt', { session: false }), detailService.updateEmployee);
router.delete('/employee/delete', passport.authenticate('jwt', { session: false }), detailService.deleteEmployee);

module.exports = router;
