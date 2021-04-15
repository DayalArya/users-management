const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const resPattern = require('../helpers/resPattern');
const User = require('../model/user.model');

const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByIdAndDelete(userId);

        // send response
        let message = 'User delete successfully.';
        let obj = resPattern.successPattern(httpStatus.OK, { message }, 'success');
        return res.status(obj.code).json(obj);
    } catch (e) {
        return next(new APIError(e.message, httpStatus.BAD_REQUEST, true));
    }
};

const banUsersList = async (req, res, next) => {
    try {
        const users = await User.find({ isBanned: true });

        // send response
        let obj = resPattern.successPattern(httpStatus.OK, users, 'success');
        return res.status(obj.code).json(obj);
    } catch (e) {
        return next(new APIError(e.message, httpStatus.BAD_REQUEST, true));
    }
};

const unbanUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByIdAndUpdate(userId,
            { isBanned: false },
            { new: true }
        );

        // send response
        let obj = resPattern.successPattern(httpStatus.OK, user, 'success');
        return res.status(obj.code).json(obj);
    } catch (e) {
        return next(new APIError(e.message, httpStatus.BAD_REQUEST, true));
    }
};

const banUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByIdAndUpdate(userId,
            { isBanned: true },
            { new: true }
        );

        // send response
        let obj = resPattern.successPattern(httpStatus.OK, user, 'success');
        return res.status(obj.code).json(obj);
    } catch (e) {
        return next(new APIError(e.message, httpStatus.BAD_REQUEST, true));
    }
};

const listUsers = async (req, res, next) => {
    try {
        const users = await User.find({});

        // send response
        let obj = resPattern.successPattern(httpStatus.OK, users, 'success');
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

const findUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if (!user) {
            let message = `User not found with userId: ${userId}`;
            return next(new APIError(message, httpStatus.BAD_REQUEST, true));
        }
        next();
    } catch (e) {
        return next(new APIError(e.message, httpStatus.BAD_REQUEST, true));
    }
};

module.exports = {
    createUser,
    listUsers,
    findUser,
    banUser,
    unbanUser,
    banUsersList,
    deleteUser
};
