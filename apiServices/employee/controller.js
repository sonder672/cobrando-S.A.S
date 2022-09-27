const service = require('./service');

module.exports = {
    async getEmployees(req, res) {
        try {
            const employees = await service.getEmployees();
            return res.status(200).json(employees);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    },
  
    async getEmployee(req, res) {
        try {
            const employee = await service.getEmployee(req.params.id);
            return res.status(200).json(employee);
        } catch (error) {
            return res.status(500).json({message: error.message});
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
        try {
            await service.updateEmployee(req.params.id, {
                nif: req.body.nif,
                name: req.body.name,
                surname: req.body.surname,
                second_surname: req.body.second_surname
            });

            res.status(201).json({message: 'Updated, ' + req.body.name});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },

    async deleteEmployee(req, res) {
        try {
            await service.deleteEmployee(req.params.id);
            res.status(204).json({message: 'deleted'});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
};