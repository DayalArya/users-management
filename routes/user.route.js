const router = require('express').Router();
const userCtrl = require('../controller/user.controller');
const validate = require('express-validation');
const { userParamsValidation } = require('../helpers/joi.validation');

router.post('/create-user',
    validate(userParamsValidation.createUser),
    userCtrl.createUser
);

router.get('/list-users',
    userCtrl.listUsers
);

module.exports = router;
