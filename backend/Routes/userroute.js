const express = require('express');
const router = express.Router();
const userController = require();

// Create a new user
router.post('/', userController.createUser);

// Read all users (Admin only)
router.get('/', userController.getAllUsers);

// Read a single user by ID (Admin only)
router.get('/:id', userController.getUserById);

// Update a user by ID (Admin only)
router.put('/:id', userController.updateUserById);

// Delete a user by ID (Admin only)
router.delete('/:id', userController.deleteUserById);

module.exports=router;