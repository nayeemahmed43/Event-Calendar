const express = require('express');
const {getEvents, createEvent} = require('../controllers/event');
const validator = require('../validator');
const router = express.Router();

router.get('/',getEvents);
router.post('/event', validator.createEventValidator,createEvent);

module.exports = router;
