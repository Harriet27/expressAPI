const express = require('express');
const router = express.Router();
const { userController } = require('../controller/index');

router.get('/getUsers', userController.getAllUsers);
router.get('/getById/:id', userController.getUserById);
router.get('/search-username', userController.searchByUsername);
router.get('/search-role', userController.searchByRole);
router.get('/login', userController.login);

module.exports = router;