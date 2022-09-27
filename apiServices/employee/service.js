const dataAccessObject = require('./dataAccessObject');

module.exports = {
    async getEmployees() {
        try {
            return await dataAccessObject.getEmployees();
        } catch (error) {
            console.log(error.message);
            throw new error('Ha habido un problema listando los empledos');
        }
    },

    /**
     * @param {int} code 
     */
    async getEmployee(code) {
        if (code === null) {
            throw new Error('Debe enviarse el identificador del empleado que quiere consultar');
        }

        try {
            const employee = await dataAccessObject.getEmployee(code);
            if (employee === null) {
                throw new Error('El empleado que desea buscar no existe');
            }

            return employee;
        } catch (error) {
            console.log(error.message);
            throw new error('Ha habido un problema listando el empleado');
        }
    },

    /**
     * @param {json} employee 
     */
    async createEmployee(employee) {
        const searchEmployee = await dataAccessObject.getEmployee(employee.code);

        if (searchEmployee !== null) {
            throw new ('El código ya fue asignado a otra persona. Coloque otro');
        }

        try {
            return await dataAccessObject.createEmployee(employee);
        } catch (error) {
            console.log(error.message);
            throw new Error('Hubo un problema con la creación del empleado');
        }
    },

    /**
     * @param {int} code 
     * @param {json} employee 
     */
    async updateEmployee(code, employee) {
        if (code === null) {
            throw new Error('Debe enviarse el identificador del empleado que quiere eliminar');
        }

        const searchEmployee = await dataAccessObject.getEmployee(code);

        if (searchEmployee === null) {
            throw new ('No existe un usuario con este código para ser actualizado');
        }

        try {
            return await dataAccessObject.updateEmployee(code, employee);
        } catch (error) {
            console.log(error.message);
            throw new Error('Ha habido un problema actualizando el empleado');
        }
    },

    /**
     * @param {int} code 
     */
    async deleteEmployee(code) {
        if (code === null) {
            throw new Error('Debe enviarse el identificador del empleado que quiere eliminar');
        }

        const employee = await dataAccessObject.getEmployee(code);

        if (employee === null) {
            throw new ('El usuario que desea eliminar no existe');
        }

        try {
            return await dataAccessObject.deleteEmployee(code);
        } catch (error) {
            console.log(error.message);
            throw new Error('Ha habido un problema eliminando este empleado');
        }
    }
};