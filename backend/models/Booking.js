const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Booking = sequelize.define('Booking', {
    userId: { type: DataTypes.INTEGER },
    trainId: { type: DataTypes.INTEGER },
    seatsBooked: { type: DataTypes.INTEGER },
});

module.exports = Booking;