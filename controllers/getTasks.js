import taskModel from "../models/task.js"

export const getAllTasks  = async(req, res) => {
    try{
      const allTasks = await taskModel.find();
      return res.json({
        allTasks
      }).status(200);

    }catch(error){
        res.json({
            msg: 'error '
        })
    }
}