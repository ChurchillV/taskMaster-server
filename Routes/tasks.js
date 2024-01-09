const router = require('express').Router();

// Controller imports 
const { CreateTask } = require('../Controllers/TaskManagementControllers/CreateTask');

// Route definitions
router.post('/:userid/:projectid/task/create', CreateTask);

module.exports = router;