const employeeModel = require('../../models/employee');

module.exports = {
    getEmployees() {
        return employeeModel.findAll();
    },

    getEmployee(code) {
        return employeeModel.findByPk(code);
    },

    createEmployee(employee) {
        return employeeModel.create(employee);
    },

    updateEmployee(code, employee) {
        return employeeModel.update(employee, {
            where: {
                code: code
            }
        });
    },

    deleteEmployee(code) {
        return employeeModel.destroy({
            where: {
                code
            }
        });
    }
};