const express = require('express');
const router = express.Router();
const userRoutes = require('./user.route');

/** /api/users */
router.use('/users', userRoutes);

module.exports = router;
