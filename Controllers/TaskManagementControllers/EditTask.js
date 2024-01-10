const Task = require('../../Models/Task');
const Project = require('../../Models/Project');
const User = require('../../Models/User');

module.exports.EditTask = async(req, res) => {
    try {
        const updateFields = req.body;

        const taskId = req.params.taskid;
        const projectId = req.params.projectid;
        const userId = req.params.userid;

        const task = await Task.findOne({ _id : taskId });
        const user = await User.findOne({ _id : userId });
        const project = await Project.findOne({ _id : projectId });
        
        if(!task) {
            res.status(404)
               .json({ message : `No task with id ${taskId} found`})
        }

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
            if (task[key] !== undefined) {
                task[key] = updateFields[key];
            }
        });

        task.updated_at = Date.now();
        await task.save();

        console.log(`Task ${taskId} updated successfully`);

        res.status(200)
           .json({
                message : "Task updated successfully",
                success : true,
                task,
           });

    } catch(error) {
        console.log(error);
    }
}