const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);

    let statusCode = err.statusCode || 500;
    let message = err.message || 'Something went wrong';

    // Handle Sequelize validation errors
    if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
        statusCode = 400; // Bad Request
        message = err.errors.map((e) => e.message).join(', ');
    }

    res.status(statusCode).json({
        success: false,
        error: message,
    });
};

module.exports = errorHandler;