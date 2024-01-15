const Project = require('../../Models/Project');

module.exports.VerifyProject = async(projectId) => {
    const project = Project.findOne({ _id : projectId });

    if(project) {
        return true;
    }

    return false;
}