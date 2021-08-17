const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entitySchema = new Schema({
  _id: Schema.Types.ObjectId,
  w_9: { type: String, unique: true },
  type: {
    type: String,
    enum: ["Individual", "LLC", "Corporation", "Retirement Account"],
  },
});

const Entity = mongoose.model("Entity", entitySchema);
module.exports = Entity;
