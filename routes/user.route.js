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

router.patch('/ban-user/:userId',
    userCtrl.findUser,
    userCtrl.banUser
);

router.patch('/unban-user/:userId',
    userCtrl.findUser,
    userCtrl.unbanUser
);

router.get('/ban-users',
    userCtrl.banUsersList
);

router.delete('/delete-user/:userId',
    userCtrl.findUser,
    userCtrl.deleteUser
);

module.exports = router;
