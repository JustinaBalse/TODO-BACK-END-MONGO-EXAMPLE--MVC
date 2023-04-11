const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Dokumento schema (vieno įrašo schema)
let taskSchema = new Schema(
    {
      task: {
          type: String
      },
      status: {
          type: Boolean
      }
    }
);

// Modelis, čia rašome Task, bet DB susikurs tasks.
const Task = new model("Task", taskSchema);

// Eksportuojame, kad galėtume naudoti kitame faile
module.exports = Task;