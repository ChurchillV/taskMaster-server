const Task = require('../../Models/Task');
const Project = require('../../Models/Project');
const User = require('../../Models/User');

module.exports.GetProjectTasks = async(req, res) => {
    try {
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

        const allProjectTasks = await Task.find({ 
            $and : 
                [
                    { user_id : userId },
                    { project_id : projectId }
                ]
        });

        res.status(200)
           .json({
                message : `Tasks for project ${projectId} returned successsfully`,
                success : true,
                tasks : allProjectTasks,
           })

    } catch(error) {
        console.log(error);
    }
}