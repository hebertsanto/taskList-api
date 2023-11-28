import taskModel from '../models/task.js';

export const addTask = async (req, res) => {

  const {
    task,
    description,
    priority,
    startDate,
    endDate
  } = req.body;

  try {
    const newTask = await taskModel.create({
      task,
      description,
      priority,
      startDate,
      endDate
    });

    return res.json({
      msg: 'add successfully',
      newTask
    }).status(201);

  } catch (error) {
    res.json({
      msg: 'error '
    });
  }
};
