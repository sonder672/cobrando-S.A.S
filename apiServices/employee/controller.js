const service = require('./service');

module.exports = {
    async getEmployees(req, res) {
        try {
            const employees = await service.getEmployees();
            res.status(200).json(employees);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
  
    async getEmployee(req, res) {
        try {
            const employee = await service.getEmployee({code: req.params.code});
            res.status(200).json(employee);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
  
    async createEmployee(req, res) {
        try {
            await service.createEmployee({
                code: req.body.code,
                nif: req.body.nif,
                name: req.body.name,
                surname: req.body.surname,
                second_surname: req.body.second_surname,
                department_code: 1
            });

            res.status(201).json({message: 'Welcome ' + req.body.name});
        } catch (error) {
            res.status(500).json({message: error.message});
        }

    },
  
    async updateEmployee(req, res) {
        console.log(req, res);

    },

    async deleteEmployee(req, res) {
        try {
            await service.deleteEmployee({code: req.id.code});
            res.status(204).json({message: 'Deleted'});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
};