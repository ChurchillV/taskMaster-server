const Project = require('../../Models/Project');
const User = require('../../Models/User');

module.exports.EditProject = async(req, res) => {
    try {
        const updateFields = req.body;

        const projectId = req.params.projectid;
        const userId = req.params.userid;

        const user = await User.findOne({ _id : userId });
        const project = await Project.findOne({ _id : projectId });

        if(!user) {
            res.status(404)
               .json({ message : `No user with id ${userId} found`})
        }

        if(!project) {
            res.status(404)
               .json({ message : `No project with id ${projectId} found`})
        }

        // Update/Maintain project information depending on frontend data
        Object.keys(updateFields).forEach(key => {
            if (project[key] !== undefined) {
                project[key] = updateFields[key];
            }
        });

        await project.save();

        console.log(`Project ${projectId} updated successfully`);

        res.status(200)
           .json({
                message : "Project updated successfully",
                success : true,
                project,
           });

    } catch(error) {
        console.log(error);
    }
}