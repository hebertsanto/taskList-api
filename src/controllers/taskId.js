import taskModel from '../models/task.js';

export const getTasksId = async (req, res) => {
  const { id } = req.params;

  try {
    const taskId = await taskModel.findById(id);
    return res.json({
      taskId
    }).status(200);

  } catch (error) {
    return res.json({
      msg: 'error '
    });
  }
};
