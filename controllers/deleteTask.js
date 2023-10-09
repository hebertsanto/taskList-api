import taskModel from "../models/task.js"

export const deleteTask  = async(req, res) => {

    const { id } = req.params;

    try{
      const task = await taskModel.findOneAndDelete(id);

      if(!task){
        res.json({
            msg: 'task not found'
        }).status(404);
      }
     
      return res.json({
         msg: 'delete task successfully',
      }).status(200);
    
    }catch(error){
        res.json({
            msg: 'error '
        })
    }
}