const express = require('express');
const { bookSeat } = require('../controllers/bookingController');
const { isAuthenticated } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', isAuthenticated, bookSeat);

module.exports = router;