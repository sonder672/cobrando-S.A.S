const employeeModel = require('../../models/employee');

module.exports = {
    async getEmployees() {
        return new Promise((resolve, reject) => 
            employeeModel.findAll({}, (err, docs) => {
                if (err) return reject(err);
                return resolve(docs);
            })); 
    },

    async getEmployee(code) {
        return new Promise((resolve, reject) => 
            employeeModel.findByPk(code, (err, docs) => {
                if (err) return reject(err);
                return resolve(docs);
            })); 
    },

    async createEmployee(employee) {
        return new Promise((resolve, reject) => employeeModel.create(employee, (err, docs) => {
            if (err) return reject(err);
            return resolve(docs);
        }));
    },

    async updateEmployee() {
        
    },

    async deleteEmployee(code) {
        return new Promise((resolve, reject) => employeeModel.destroy({
            where: {
                code
            }
        }, (err, docs) => {
            if (err) return reject(err);
            return resolve(docs);
        }));
    }
};