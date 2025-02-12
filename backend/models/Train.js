const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Train = sequelize.define('Train', {
    name: { type: DataTypes.STRING },
    source: { type: DataTypes.STRING },
    destination: { type: DataTypes.STRING },
    totalSeats: { type: DataTypes.INTEGER },
    availableSeats: { type: DataTypes.INTEGER },
});

module.exports = Train;