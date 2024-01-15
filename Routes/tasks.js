const router = require('express').Router();

// Controller imports 
const { CreateTask } = require('../Controllers/TaskManagementControllers/CreateTask');
const { EditTask } = require('../Controllers/TaskManagementControllers/EditTask');
const { GetTaskById } = require('../Controllers/TaskManagementControllers/GetTaskById');

// Route definitions
router.post('/create/:userid/:projectid/', CreateTask);
router.post('/edit/:userid/:projectid/:taskid', EditTask);
router.get('/:userid/:projectid/:taskid', GetTaskById);

module.exports = router;