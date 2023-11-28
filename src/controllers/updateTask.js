import taskModel from "../models/task.js"

export const updateTask  = async(req, res) => {
    const { id } = req.params;

    try{
      const updateTask = await taskModel.findByIdAndUpdate(id, req.body);

      if(!updateTask){
         res.json({
            msg:'task not found'
         })
      }
      
      return res.json({
       msg:'update task successfully',
      }).status(200);

    }catch(error){
        res.json({
            msg: 'error '
        })
    }
}