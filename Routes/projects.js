const router = require('express').Router();


// Controller imports
const { CreateProject } = require('../Controllers/ProjectManagementControllers/CreateProject');


// Route definitions
router.post('/:userid/project/create', CreateProject);

module.exports = router;