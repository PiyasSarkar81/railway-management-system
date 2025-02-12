const express = require('express');
const { addTrain, getTrainById, getTrains } = require('../controllers/trainController');
const { isAdmin } = require('../middleware/adminMiddleware');
const router = express.Router();

router.get('/', getTrains);
router.post('/', isAdmin, addTrain);
router.get('/trains/:id', getTrainById);

module.exports = router;