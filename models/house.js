const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true, unique: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'Member' }],
  date: { type: Date, default: Date.now },
  password: {type: String, required: true}
});

const House = mongoose.model("House", houseSchema);

module.exports = House;
