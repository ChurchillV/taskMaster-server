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

        const todoTasks = allProjectTasks
                                .filter(task => task.status === "To Do");
        
        const inProgressTasks = allProjectTasks
                                .filter(task => task.status === "In Progress");

        const doneTasks = allProjectTasks
                                .filter(task => task.status === "Done");

        res.status(200)
           .json({
                message : `Tasks for project ${projectId} returned successsfully`,
                success : true,
                tasks : allProjectTasks,
                tasksToDo : todoTasks,
                tasksInProgress : inProgressTasks,
                tasksDone : doneTasks,
           })

    } catch(error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}