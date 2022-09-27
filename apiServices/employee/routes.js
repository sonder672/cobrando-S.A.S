const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/', controller.getEmployees);
router.get('/:id', controller.getEmployee);
router.post('/', controller.createEmployee);
router.patch('/:id', controller.updateEmployee);
router.delete('/:id', controller.deleteEmployee);

module.exports = router;