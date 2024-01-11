const router = require('express').Router();

// Controller imports
const { CreateProject } = require('../Controllers/ProjectManagementControllers/CreateProject');
const { EditProject } = require('../Controllers/ProjectManagementControllers/EditProject');
const { GetProjectTasks } = require('../Controllers/ProjectManagementControllers/GetProjectTasks');

// Route definitions
router.post('/create/:userid/', CreateProject);
router.post('/edit/:userid/:projectid/', EditProject);
router.get('/tasks/:userid/:projectid/', GetProjectTasks);

module.exports = router;