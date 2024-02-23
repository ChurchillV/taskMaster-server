const Project = require('../../Models/Project');
const mongoose = require('mongoose');

module.exports.GetAllProjectsByUserId = async (req, res) => {
  try {

    const userId = req.params.userid;

    const projectsSummary = await Project.aggregate([
        { $match: { user_id : new mongoose.Types.ObjectId(userId) } },
        { $lookup: {
          from: 'tasks',
          localField: '_id',
          foreignField: 'project_id',
          as: 'tasks',
        }},
      {
        $project: {
          _id: 1,
          title: 1,
          summary: 1,
          taskCount: { $size: '$tasks' },
          tasksToDoCount: {
            $size: { $filter: { input: '$tasks', cond: { $eq: ['$$CURRENT.status', 'To Do'] } } },
          },
          tasksInProgressCount: {
            $size: { $filter: { input: '$tasks', cond: { $eq: ['$$CURRENT.status', 'In Progress'] } } },
          },
          tasksDoneCount: {
            $size: { $filter: { input: '$tasks', cond: { $eq: ['$$CURRENT.status', 'Done'] } } },
          },
          // nextDeadline: {
          //   $min: {
          //     $cond: {
          //       if: { $and: [{ $exists: ['$tasks.due_date'] }, { $gt: ['$tasks.due_date', new Date()] }] },
          //       then: '$tasks.due_date',
          //       else: null,
          //     },
          //   },
          // },
        },
      },
    ]);
    
    res.status(200).json({
      message : `Projects for user ${userId} retrieved successfully`,
      projects : projectsSummary,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
