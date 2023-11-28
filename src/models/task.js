import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TaskModel= new Schema({
    task:{
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'urgent'],
      default: 'low'
    },
    startDate:{
        type:Date,
        default:Date.now,
        required:true,
    },
    endDate:{
        type:Date,
        required:true,
    }
})

export default mongoose.model('Task', TaskModel);