const express = require('express');
const employees = require('../apiServices/employee/routes');

const router = express.Router();

router.use('/employee', employees);

module.exports = router;