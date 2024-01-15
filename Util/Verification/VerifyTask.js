const Task = require('../../Models/Task');

module.exports.VerifyTask = async(taskId) => {
    const task = Task.findOne({ _id : taskId });

    if(task) {
        return true;
    }

    return false;
}