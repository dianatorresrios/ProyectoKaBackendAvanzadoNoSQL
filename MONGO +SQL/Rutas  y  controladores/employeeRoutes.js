const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Rutas para empleados
router.post('/register', employeeController.register);
router.post('/login', employeeController.login);

module.exports = router;
