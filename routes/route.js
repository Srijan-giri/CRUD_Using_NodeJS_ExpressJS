const express = require('express');
const app = express();
const router = express.Router();
// const { sayHello } = require('../controllers/crud_controller');
const userController = require('../controllers/crud_controller');

// router.get('/hello', sayHello);

router.post('/create', userController.createUser);
router.post('/getById/:id', userController.getUserById);
router.post('/getAll', userController.getAll);

module.exports = router; 