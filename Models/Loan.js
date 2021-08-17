const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loanSchema = new Schema({
  _id: Schema.Types.ObjectId,
  loan_amount: {
    type: Number,
    required: true,
  },
  interest_rate: {
    type: String,
    required: true,
  },
  status: {
    enum: ["Draft", "Available", "Funded", "Complete"],
  },
  transactions: [{ type: Schema.Types.ObjectId, ref: "Transaction", min: 1 }],
});

const Loan = mongoose.model("Loan", loanSchema);
module.exports = Loan;
