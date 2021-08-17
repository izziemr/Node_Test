const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lenderSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  phone_number: String,
  disclaimer_id: {
    type: Schema.Types.ObjectId,
    ref: "Transaction",
    unique: true,
  },
  w9_files: [{ type: Schema.Types.ObjectId, required: true, ref: "Entity" }],
  hasSignedAllDocuments: Boolean,
});

const Lender = mongoose.model("Lender", lenderSchema);
module.exports = Lender;
