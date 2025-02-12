const Train = require('../models/Train');

exports.addTrain = async (req, res) => {
    try {
        const { name, source, destination, totalSeats } = req.body;

        // Validate input
        if (!name || !source || !destination || !totalSeats) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create the train
        const train = await Train.create({
            name,
            source,
            destination,
            totalSeats,
            availableSeats: totalSeats, // Initially, all seats are available
        });

        res.status(201).json(train);
    } catch (error) {
        console.error('Error adding train:', error); // Log the error for debugging
        res.status(500).json({ error: error.message });
    }
};

exports.getTrains = async (req, res, next) => {
    try {
        const { source, destination } = req.query;

        if (!source || !destination) {
            return res.status(400).json({ error: 'Source and destination are required' });
        }

        const trains = await Train.findAll({
            where: { source, destination },
        });

        res.json(trains);
    } catch (error) {
        next(error);
    }
};
