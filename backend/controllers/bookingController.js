const { Op } = require('sequelize');
const Train = require('../models/Train');
const Booking = require('../models/Booking');
const sequelize = require('../config/db');

exports.bookSeat = async (req, res, next) => {
    const { trainId, seatsBooked } = req.body;
    const transaction = await sequelize.transaction();
    try {
        const train = await Train.findByPk(trainId, { lock: true, transaction });
        if (!train || train.availableSeats < seatsBooked) {
            await transaction.rollback();
            return next(new CustomError('Not enough seats available', 400));
        }

        train.availableSeats -= seatsBooked;
        await train.save({ transaction });

        const booking = await Booking.create(
            { userId: req.user.id, trainId, seatsBooked },
            { transaction }
        );

        await transaction.commit();
        res.status(201).json(booking);
    } catch (error) {
        await transaction.rollback();
        next(error);
    }
};