const router = require('express').Router();

// Controller imports
const { CreateProject } = require('../Controllers/ProjectManagementControllers/CreateProject');
const { EditProject } = require('../Controllers/ProjectManagementControllers/EditProject');

// Route definitions
router.post('/create/:userid/', CreateProject);
router.post('/edit/:userid/:projectid/', EditProject);

module.exports = router;