const router = require('express').Router();

// Controller imports
const { CreateProject } = require('../Controllers/ProjectManagementControllers/CreateProject');
const { EditProject } = require('../Controllers/ProjectManagementControllers/EditProject');
const { GetProjectTasks } = require('../Controllers/ProjectManagementControllers/GetProjectTasks');
const { GetAllProjectsByUserId } = require('../Controllers/ProjectManagementControllers/GetAllProjectsByUserId');
const { GetProjectById } = require('../Controllers/ProjectManagementControllers/GetProjectById');

// Route definitions
router.post('/create/:userid/', CreateProject);
router.post('/edit/:userid/:projectid/', EditProject);
router.get('/tasks/:userid/:projectid/', GetProjectTasks);
router.get('/projects/:userid/', GetAllProjectsByUserId);
router.get('/:userid/:projectid/', GetProjectById);

module.exports = router;