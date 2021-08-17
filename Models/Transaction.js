const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  _id: Schema.Types.ObjectId,
  // disclaimer_id: { type: String, unique: true },
  type: { type: String, enum: ["Origination", "Sales"] },
  lenders: [{ type: Schema.Types.ObjectId, ref: "Lender" }],
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
