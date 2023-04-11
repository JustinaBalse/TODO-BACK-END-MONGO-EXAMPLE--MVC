const express = require("express");
const router = express.Router();

const { getAllTasks, getTaskById, createNewTask, updateTask, deleteTask } = require("../controllers/todoController");

router.route("/").get(getAllTasks);
router.route("/:id").get(getTaskById);
router.route("/").post(createNewTask);
router.route("/:id").patch(updateTask);
router.route("/:id").delete(deleteTask);


module.exports = router;