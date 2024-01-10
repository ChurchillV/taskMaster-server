const router = require('express').Router();

// Controller imports 
const { CreateTask } = require('../Controllers/TaskManagementControllers/CreateTask');
const { EditTask } = require('../Controllers/TaskManagementControllers/EditTask');

// Route definitions
router.post('/create/:userid/:projectid/', CreateTask);
router.post('/edit/:userid/:projectid/:taskid', EditTask);

module.exports = router;