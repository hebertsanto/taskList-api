import express from "express";
import { getAllTasks } from "../controllers/getTasks.js";
import { addTask } from "../controllers/addTask.js";
import { deleteTask } from "../controllers/deleteTask.js";
import { getTasksId } from "../controllers/taskId.js";
import { updateTask } from "../controllers/updateTask.js";

const router = express.Router();

router.get('/task', getAllTasks);
router.get('/task/:id', getTasksId);
router.post('/task', addTask);
router.delete('/task/:id',deleteTask );
router.put('/task/:id', updateTask);


export default router;
