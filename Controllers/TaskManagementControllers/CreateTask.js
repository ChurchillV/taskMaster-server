const Task = require('../../Models/Task');
const User = require('../../Models/User');
const Project = require('../../Models/Project');


module.exports.CreateTask = async(req, res) => {
    try {

        const { title, description, dueDate } = req.body;

        const userId = req.params.userid;
        const projectId = req.params.projectid;

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

        const newTask = await Task.create({
            title : title,
            description : description,
            due_date : new Date(dueDate),
            user_id : userId,
            project_id : projectId
        })

        if(!newTask) {
            res.status(400)
               .json({
                    message : "Error creating Task"
               });
        }

        console.log(`Task ${newTask._id} of Project ${projectId} for User ${userId} created successfully`);

        res.status(200)
        .json({
             message : "Project created successfully",
             success : true,
             newTask,
        });

    } catch(error) {
        console.log(error);
    }
}