const Project = require('../../Models/Project');
const User = require('../../Models/User');
const Task = require('../../Models/Task');

module.exports.GetTaskById = async(req, res) => {
    try {
        const taskId = req.params.taskid;
        const projectId = req.params.projectid;
        const userId = req.params.userid;
        
        const user = await User.findOne({ _id : userId });
        const project = await Project.findOne({ _id : projectId });
        const task = await Task.findOne({
            $and : 
                [
                    { user_id : userId },
                    { project_id : projectId }
                ]
            });
            

        if(!task) {
            res.status(404)
               .json({ messsage : `No task with id ${taskId} found` })
        }

        if(!user) {
            res.status(404)
               .json({ message : `No user with id ${userId} found` })
        }

        if(!project) {
            res.status(404)
               .json({ message : `No project with id ${projectId} found`})
        }

        console.log(`Task ${taskId} of user ${userId} retrieved successfully`);

        res.status(200)
           .json({
                message : `Task retrieved successufully`,
                task : task,
           });

    } catch(error) {
        console.log(error);
        res.status(500)
           .json({
                message : "Internal Server Error"
           })
    }
}