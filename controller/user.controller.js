const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const resPattern = require('../helpers/resPattern');
const User = require('../model/user.model');

const listUsers = async (req, res, next) => {
    try {
        const users = await User.find({});

        // send response
        let obj = resPattern.successPattern(httpStatus.CREATED, users, 'success');
        return res.status(obj.code).json(obj);
    } catch (e) {
        return next(new APIError(e.message, httpStatus.BAD_REQUEST, true));
    }
};

const createUser = async (req, res, next) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        });

        // send response
        let obj = resPattern.successPattern(httpStatus.CREATED, user, 'success');
        return res.status(obj.code).json(obj);
    } catch (e) {
        return next(new APIError(e.message, httpStatus.BAD_REQUEST, true));
    }
};

module.exports = {
    createUser,
    listUsers
};
