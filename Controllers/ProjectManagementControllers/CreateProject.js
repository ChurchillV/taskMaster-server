const Project = require('../../Models/Project');
const User = require('../../Models/User');

module.exports.CreateProject = async(req, res) => {
    try {
        
        const { title, description, summary } = req.body;
        const userId = req.params.userid;

        const user = await User.findOne({ _id : userId });

        if(!user) {
            res.status(404)
               .json({ message : `No user with id ${userId} found`})
        }

        const newProject = await Project.create({
            title : title,
            description : description,
            summary : summary,
            user_id : userId
        });

        if(!newProject) {
            res.status(400)
               .json({
                    message : "Error creating project"
               });
        }

        console.log(`Project ${newProject._id} of user ${userId} created successfully`);

        res.status(200)
           .json({
                message : "Project created successfully",
                success : true,
                newProject,
           });

    } catch(error) {
        console.log(error);
    }
}