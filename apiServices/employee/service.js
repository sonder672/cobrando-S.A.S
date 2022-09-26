const dataAccessObject = require('./dataAccessObject');

module.exports = {
    async getEmployees() {
        return dataAccessObject.getEmployees();
    },

    getEmployee(code) {
        if (code === null) {
            throw new Error('Debe enviarse el identificador del empleado que quiere consultar');
        }

        return dataAccessObject.getEmployee(code);
    },

    createEmployee(employee) {
        return dataAccessObject.createEmployee(employee);
    },

    updateEmployee(code) {
        if (code === null) {
            throw new Error('Debe enviarse el identificador del empleado que quiere eliminar');
        }

        console.log(code);
    },

    deleteEmployee(code) {
        if (code === null) {
            throw new Error('Debe enviarse el identificador del empleado que quiere eliminar');
        }

        return dataAccessObject.deleteEmployee(code);
    }
};