const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const areaSchema = new Schema({
  _id: Schema.Types.ObjectId,
  house: house._id,
  //or is it like this? 
  //house: { type: Schema.Types.ObjectId, ref: House}
  name: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now }
});

const Area = mongoose.model("Area", areaSchema);

module.exports = Area;
