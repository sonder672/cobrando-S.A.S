const express = require('@awaitjs/express');
const controller = require('./controller');

const router = express.Router();

router.getAsync('/employees', controller.getEmployees);
router.getAsync('/employee/:id', controller.getEmployee);
router.postAsync('/employee', controller.createEmployee);
router.patchAsync('/employee/:id', controller.updateEmployee);
router.deleteAsync('/employee/:id', controller.deleteEmployee);

module.exports = router;