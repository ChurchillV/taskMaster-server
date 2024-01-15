const Task = require('../../Models/Task');

const { VerifyUser } = require('../../Util/Verification/VerifyUser');
const { VerifyProject } = require('../../Util/Verification/VerifyProject');

module.exports.GetTaskById = async(req, res) => {
    try {
        const taskId = req.params.taskid;
        const projectId = req.params.projectid;
        const userId = req.params.userid;

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

        if(!VerifyUser(userId)) {
            res.status(404)
               .json({ message : `No user with id ${userId} found` })
        }

        if(!VerifyProject(projectId)) {
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