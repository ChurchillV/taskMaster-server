const router = require('express').Router();

// Controller imports
const { CreateProject } = require('../Controllers/ProjectManagementControllers/CreateProject');
const { EditProject } = require('../Controllers/ProjectManagementControllers/EditProject');
const { GetProjectTasks } = require('../Controllers/ProjectManagementControllers/GetProjectTasks');
const { GetAllProjects } = require('../Controllers/ProjectManagementControllers/GetAllProjects');

// Route definitions
router.post('/create/:userid/', CreateProject);
router.post('/edit/:userid/:projectid/', EditProject);
router.get('/tasks/:userid/:projectid/', GetProjectTasks);
router.get('/projects/:userid/', GetAllProjects);

module.exports = router;