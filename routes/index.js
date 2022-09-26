const express = require('express');
const employees = require('../apiServices/employee/routes');

const router = express.Router();

router.use('/api', employees);

module.exports = router;