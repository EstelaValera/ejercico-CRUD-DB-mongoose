const express = require('express');
const router = express.Router();
const taksRoutes = require('./task');

router.use('/', taksRoutes);

module.exports = router;