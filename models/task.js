const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  area: area._id,
  //or is it like this? 
  //area: { type: Schema.Types.ObjectId, ref: Area}
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
