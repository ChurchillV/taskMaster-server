const router = require('express').Router();

const { CreateProject } = require('../../Controllers/ProjectManagementControllers/CreateProject');

router.post('/:userid/project/create', CreateProject);

module.exports = router;