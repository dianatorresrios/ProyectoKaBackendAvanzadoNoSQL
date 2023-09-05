const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Rutas para clientes
router.post('/register', clientController.register);
router.post('/login', clientController.login);

module.exports = router;
